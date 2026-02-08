import re
from playwright.sync_api import sync_playwright
import time
import http.server
import socketserver
import threading
import os

# Start a simple HTTP server
PORT = 3001
Handler = http.server.SimpleHTTPRequestHandler

def start_server():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at port {PORT}")
        httpd.serve_forever()

# Start server in a thread
server_thread = threading.Thread(target=start_server, daemon=True)
server_thread.start()

# Wait for server to start
time.sleep(2)

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the page
        page.goto(f"http://localhost:{PORT}/index.html")

        # 1. Verify Discord Widget is present and visible
        print("Verifying Discord Widget...")
        page.wait_for_selector("#discord-widget-root")
        discord_widget = page.locator(".discord-widget")
        if discord_widget.is_visible():
            print("PASS: Discord widget is visible.")
        else:
            print("FAIL: Discord widget is not visible.")

        # 2. Verify Gateway Cards functionality
        print("Verifying Gateway Cards...")
        # Navigate to Get Key page to see cards
        page.evaluate("showPage('getkey')")
        page.wait_for_selector(".ultra-card.linkvertise")

        # Check if cards exist
        cards = page.locator(".ultra-card")
        count = cards.count()
        print(f"Found {count} gateway cards.")

        if count >= 2:
            print("PASS: Found 2 gateway cards.")
        else:
            print("FAIL: Expected 2 gateway cards.")

        # 3. Verify window.open on click
        print("Verifying click handler...")
        # Setup popup listener
        with page.expect_popup() as popup_info:
            # Click the Linkvertise card
            page.click(".ultra-card.linkvertise")

        popup = popup_info.value
        print(f"PASS: Popup opened with URL: {popup.url}")

        # 4. Verify Toast Message
        print("Verifying Toast Message...")
        page.wait_for_selector(".toast")
        toast_text = page.locator(".toast-message").inner_text()
        print(f"Toast message: {toast_text}")

        if "Gateway opened" in toast_text:
            print("PASS: Toast message is correct.")
        else:
            print(f"FAIL: Toast message incorrect. Got: {toast_text}")

        # Take screenshot
        page.screenshot(path="fix_verification.png", full_page=True)
        print("Screenshot saved to fix_verification.png")

        browser.close()

if __name__ == "__main__":
    run()
