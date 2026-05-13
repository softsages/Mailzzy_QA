# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: profile.spec.ts >> User profile >> should open the profile page from the user menu
- Location: tests\profile.spec.ts:7:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: /My Profile/i })
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for getByRole('heading', { name: /My Profile/i })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - banner "Top Toolbar" [ref=e4]:
      - generic [ref=e5]:
        - generic [ref=e7]:
          - generic [ref=e8]:
            - progressbar [ref=e9]:
              - img [ref=e10]
            - progressbar "Email usage 0 percent" [ref=e12]:
              - img [ref=e13]
          - generic [ref=e15]:
            - generic [ref=e16]: 0 emails used
            - generic [ref=e17]: from 50
        - generic [ref=e18]:
          - button "Help and support" [ref=e19] [cursor=pointer]:
            - img [ref=e20]
          - button "Open notifications" [ref=e21] [cursor=pointer]:
            - generic "Notifications" [ref=e22]:
              - img [ref=e23]
              - generic: "0"
          - generic [ref=e25]:
            - button "User account menu" [ref=e26] [cursor=pointer]
            - img [ref=e28] [cursor=pointer]
    - generic:
      - navigation "Main navigation":
        - generic [ref=e30]:
          - link "Go to dashboard" [ref=e32] [cursor=pointer]:
            - img [ref=e33]
          - navigation "Primary menu" [ref=e34]:
            - list [ref=e35]:
              - listitem [ref=e36]:
                - link "Dashboard" [ref=e37] [cursor=pointer]:
                  - /url: /dashboard
                  - img [ref=e39]
                  - generic [ref=e42]: Dashboard
              - listitem [ref=e43]:
                - button "Contacts" [ref=e44] [cursor=pointer]:
                  - img [ref=e46]
                  - generic [ref=e49]: Contacts
              - listitem [ref=e50]:
                - link "Campaigns" [ref=e51] [cursor=pointer]:
                  - /url: /campaigns
                  - img [ref=e53]
                  - generic [ref=e55]: Campaigns
              - listitem [ref=e56]:
                - button "Automations" [ref=e57] [cursor=pointer]:
                  - img [ref=e59]
                  - generic [ref=e61]: Automations
              - listitem [ref=e62]:
                - link "Transactional Email" [ref=e63] [cursor=pointer]:
                  - /url: /transactionalemail
                  - img [ref=e65]
                  - generic [ref=e68]: Transactional Email
              - listitem [ref=e69]:
                - link "Texts" [ref=e70] [cursor=pointer]:
                  - /url: /texts
                  - img [ref=e72]
                  - generic [ref=e76]: Texts
              - listitem [ref=e77]:
                - link "Templates" [ref=e78] [cursor=pointer]:
                  - /url: /templates
                  - img [ref=e80]
                  - generic [ref=e84]: Templates
              - listitem [ref=e85]:
                - link "Integrations" [ref=e86] [cursor=pointer]:
                  - /url: /integration
                  - img [ref=e88]
                  - generic [ref=e90]: Integrations
              - listitem [ref=e91]:
                - button "Reports" [ref=e92] [cursor=pointer]:
                  - img [ref=e94]
                  - generic [ref=e97]: Reports
          - button "Switch to SMTP" [ref=e99] [cursor=pointer]:
            - img [ref=e101]
            - generic [ref=e104]: Switch to SMTP
            - generic [ref=e105]: Beta
      - button "Collapse navigation" [expanded] [ref=e106] [cursor=pointer]:
        - img [ref=e107]
    - main [active] [ref=e109]:
      - main [ref=e110]:
        - generic [ref=e112]:
          - generic [ref=e113]:
            - generic [ref=e114]:
              - generic [ref=e115]:
                - heading "Welcome, rahul malviya!" [level=1] [ref=e116]
                - button "Create Campaign" [ref=e117] [cursor=pointer]: Create Campaign
              - heading "Here's your recent activities" [level=2] [ref=e118]
            - generic [ref=e122]:
              - generic [ref=e123]:
                - generic [ref=e124]:
                  - paragraph [ref=e125]: Last Sent Campaign
                  - heading "Test_11052026_0013" [level=6] [ref=e126]
                  - paragraph [ref=e127]: Created by dishant.modi@softsages.com
                  - paragraph [ref=e128]: Regular Campaign • Sent on May 11, 2026
                - button "View report for Test_11052026_0013" [ref=e130] [cursor=pointer]:
                  - img [ref=e133]
                  - text: View Report
              - list [ref=e134]:
                - listitem "The total number of recipients who received this campaign." [ref=e135]:
                  - heading "Recipients 10" [level=5] [ref=e136]: "10"
                  - paragraph [ref=e138]: Recipients
                - separator [ref=e139]
                - listitem "The percentage of unique recipients who opened the email." [ref=e140]:
                  - heading "Opened 0%" [level=5] [ref=e141]: 0%
                  - paragraph [ref=e143]: Opened
                - separator [ref=e144]
                - listitem "The percentage of recipients who clicked on at least one link within the email." [ref=e145]:
                  - heading "Clicked 0%" [level=5] [ref=e146]: 0%
                  - paragraph [ref=e148]: Clicked
                - separator [ref=e149]
                - listitem "The percentage of recipients who opened the email and clicked on a link." [ref=e150]:
                  - heading "CTOR 0%" [level=5] [ref=e151]: 0%
                  - paragraph [ref=e153]: CTOR
          - generic [ref=e154]:
            - heading "Performance Overview" [level=1] [ref=e156]
            - generic [ref=e157]:
              - generic [ref=e159]:
                - generic [ref=e160]:
                  - generic [ref=e161]:
                    - img [ref=e162]
                    - heading "Emails sent" [level=2] [ref=e164]
                  - generic [ref=e168]:
                    - button "Select date range" [ref=e169] [cursor=pointer]: Last 30 Days
                    - img [ref=e171] [cursor=pointer]
                    - group
                - separator [ref=e173]
                - region "Emails sent" [ref=e174]:
                  - generic [ref=e175]:
                    - generic [ref=e176]:
                      - paragraph [ref=e177]: Last 30 days emails sent
                      - paragraph [ref=e178]: "479"
                    - generic [ref=e179]:
                      - generic [ref=e181]:
                        - generic [ref=e182]:
                          - generic [ref=e183]:
                            - paragraph [ref=e184]: Open rate
                            - img [ref=e185]
                          - paragraph [ref=e187]: 8%
                        - progressbar "Open rate" [ref=e188]
                      - generic [ref=e191]:
                        - generic [ref=e192]:
                          - generic [ref=e193]:
                            - paragraph [ref=e194]: Click rate
                            - img [ref=e195]
                          - paragraph [ref=e197]: 1%
                        - progressbar "Click rate" [ref=e198]
                      - generic [ref=e201]:
                        - generic [ref=e202]:
                          - generic [ref=e203]:
                            - paragraph [ref=e204]: Click to open rate
                            - img [ref=e205]
                          - paragraph [ref=e207]: 14%
                        - progressbar "Click to open rate" [ref=e208]
                - generic [ref=e213]:
                  - application [ref=e214]:
                    - generic [ref=e216]:
                      - generic [ref=e220]:
                        - generic:
                          - generic:
                            - generic: "0"
                            - generic: "0"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "10"
                          - generic:
                            - generic: "1"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "148"
                          - generic:
                            - generic: "9"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "26"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "38"
                          - generic:
                            - generic: "8"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "10"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "7"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "68"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "0"
                          - generic:
                            - generic: "136"
                      - generic [ref=e223]:
                        - generic [ref=e224]: Apr 11
                        - generic [ref=e225]: Apr 13
                        - generic [ref=e226]: Apr 15
                        - generic [ref=e227]: Apr 17
                        - generic [ref=e228]: Apr 19
                        - generic [ref=e229]: Apr 21
                        - generic [ref=e230]: Apr 23
                        - generic [ref=e231]: Apr 25
                        - generic [ref=e232]: Apr 27
                        - generic [ref=e233]: Apr 29
                        - generic [ref=e234]: May 01
                        - generic [ref=e235]: May 03
                        - generic [ref=e236]: May 05
                        - generic [ref=e237]: May 07
                        - generic [ref=e238]: May 09
                        - generic [ref=e239]: May 11
                    - generic [ref=e241]:
                      - generic [ref=e242]: "150"
                      - generic [ref=e243]: "100"
                      - generic [ref=e244]: "50"
                      - generic [ref=e245]: "0"
                  - status [ref=e246]
                  - text: ●
                  - generic [ref=e247]:
                    - button [ref=e248] [cursor=pointer]:
                      - img
                    - button [ref=e249] [cursor=pointer]:
                      - img
                    - button [pressed] [ref=e250] [cursor=pointer]:
                      - img
                    - button [ref=e251] [cursor=pointer]:
                      - img
                    - button [ref=e252] [cursor=pointer]:
                      - img
                    - button [ref=e253] [cursor=pointer]:
                      - img
                    - menu:
                      - menuitem: Download SVG
                      - menuitem: Download PNG
                      - menuitem: Download CSV
              - generic [ref=e255]:
                - generic [ref=e256]:
                  - generic [ref=e257]:
                    - img [ref=e258]
                    - heading "Contacts" [level=2] [ref=e260]
                  - generic [ref=e264]:
                    - button "Select date range" [ref=e265] [cursor=pointer]: Last 30 Days
                    - img [ref=e267] [cursor=pointer]
                    - group
                - separator [ref=e269]
                - generic [ref=e271]:
                  - generic [ref=e272]:
                    - paragraph [ref=e273]: Total active contacts
                    - img [ref=e274]
                  - heading "58,804" [level=5] [ref=e276]
                - generic [ref=e277]:
                  - region "Additional contact metrics" [ref=e279]:
                    - generic [ref=e281]:
                      - generic [ref=e282]:
                        - paragraph [ref=e284]: New contacts today
                        - paragraph [ref=e285]: "24"
                      - separator [ref=e286]
                    - generic [ref=e288]:
                      - generic [ref=e289]:
                        - paragraph [ref=e291]: New contacts in this month
                        - paragraph [ref=e292]: "24"
                      - separator [ref=e293]
                    - generic [ref=e295]:
                      - generic [ref=e296]:
                        - paragraph [ref=e298]: New in last 30 days
                        - paragraph [ref=e299]: "24"
                      - separator [ref=e300]
                    - generic [ref=e302]:
                      - generic [ref=e303]:
                        - paragraph [ref=e305]: Unsubscribed in last 30 days
                        - paragraph [ref=e306]: "0"
                      - separator [ref=e307]
                  - generic [ref=e310]:
                    - application [ref=e311]:
                      - generic [ref=e313]:
                        - generic [ref=e317]:
                          - generic:
                            - generic:
                              - generic: "0"
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "24"
                        - generic [ref=e320]:
                          - generic [ref=e321]: Apr 11
                          - generic [ref=e322]: Apr 13
                          - generic [ref=e323]: Apr 15
                          - generic [ref=e324]: Apr 17
                          - generic [ref=e325]: Apr 19
                          - generic [ref=e326]: Apr 21
                          - generic [ref=e327]: Apr 23
                          - generic [ref=e328]: Apr 25
                          - generic [ref=e329]: Apr 27
                          - generic [ref=e330]: Apr 29
                          - generic [ref=e331]: May 01
                          - generic [ref=e332]: May 03
                          - generic [ref=e333]: May 05
                          - generic [ref=e334]: May 07
                          - generic [ref=e335]: May 09
                          - generic [ref=e336]: May 11
                      - generic [ref=e338]:
                        - generic [ref=e339]: "25"
                        - generic [ref=e340]: "20"
                        - generic [ref=e341]: "15"
                        - generic [ref=e342]: "10"
                        - generic [ref=e343]: "5"
                        - generic [ref=e344]: "0"
                    - status [ref=e345]
                    - text: ●
                    - generic [ref=e346]:
                      - button [ref=e347] [cursor=pointer]:
                        - img
                      - button [ref=e348] [cursor=pointer]:
                        - img
                      - button [pressed] [ref=e349] [cursor=pointer]:
                        - img
                      - button [ref=e350] [cursor=pointer]:
                        - img
                      - button [ref=e351] [cursor=pointer]:
                        - img
                      - button [ref=e352] [cursor=pointer]:
                        - img
                      - menu:
                        - menuitem: Download SVG
                        - menuitem: Download PNG
                        - menuitem: Download CSV
  - iframe [ref=e353]:
    - button "Chat widget" [ref=f7e4] [cursor=pointer]:
      - img "Opens Chat This icon Opens the chat window." [ref=f7e7]
```

# Test source

```ts
  1  | import { expect, Page } from '@playwright/test';
  2  | 
  3  | export class ProfilePage {
  4  |   readonly page: Page;
  5  |   readonly myProfileMenuItem;
  6  |   readonly profileHeading;
  7  | 
  8  |   constructor(page: Page) {
  9  |     this.page = page;
  10 |     this.myProfileMenuItem = page.getByRole('menuitem', { name: 'My Profile' });
  11 |     this.profileHeading = page.getByRole('heading', { name: /My Profile/i });
  12 |   }
  13 | 
  14 |   async openMyProfile() {
  15 |     await expect(this.myProfileMenuItem).toBeVisible({ timeout: 30000 });
  16 |     await this.myProfileMenuItem.click();
  17 |   }
  18 | 
  19 |   async expectProfilePage() {
> 20 |     await expect(this.profileHeading).toBeVisible({ timeout: 30000 });
     |                                       ^ Error: expect(locator).toBeVisible() failed
  21 |   }
  22 | }
  23 | 
```