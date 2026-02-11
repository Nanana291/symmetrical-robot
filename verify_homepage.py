from playwright.sync_api import sync_playwright

def verify_homepage():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000")

            # Wait for the React component to mount
            page.wait_for_selector('text="High Quality"', timeout=10000)

            # Take a screenshot of the homepage
            page.screenshot(path="verification.png", full_page=True)
            print("Screenshot taken: verification.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_homepage()
