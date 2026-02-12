from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to home
        page.goto("http://localhost:3000/")

        # Force switch to games page using the application's internal logic
        page.evaluate("showPage('games')")

        # Wait for the React component to mount and the title to appear
        page.wait_for_selector('text=Supported Games', timeout=10000)

        # Wait for grid to be visible
        page.wait_for_selector('.grid', timeout=10000)

        # Wait a bit for images/animations
        page.wait_for_timeout(3000)

        # Take screenshot
        page.screenshot(path="verification/games_page.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    run()
