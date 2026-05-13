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

Locator: getByRole('menuitem', { name: 'My Profile' })
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for getByRole('menuitem', { name: 'My Profile' })

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
                  - heading "Regular Campaign + schedule 10 am" [level=6] [ref=e126]
                  - paragraph [ref=e127]: Created by hitesh.pawar@softsages.com
                  - paragraph [ref=e128]: Regular Campaign • Sent on May 12, 2026
                - button "View report for Regular Campaign + schedule 10 am" [ref=e130] [cursor=pointer]:
                  - img [ref=e133]
                  - text: View Report
              - list [ref=e134]:
                - listitem "The total number of recipients who received this campaign." [ref=e135]:
                  - heading "Recipients 12" [level=5] [ref=e136]: "12"
                  - paragraph [ref=e138]: Recipients
                - separator [ref=e139]
                - listitem "The percentage of unique recipients who opened the email." [ref=e140]:
                  - heading "Opened 58%" [level=5] [ref=e141]: 58%
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
                      - paragraph [ref=e178]: "493"
                    - generic [ref=e179]:
                      - generic [ref=e181]:
                        - generic [ref=e182]:
                          - generic [ref=e183]:
                            - paragraph [ref=e184]: Open rate
                            - img [ref=e185]
                          - paragraph [ref=e187]: 15%
                        - progressbar "Open rate" [ref=e188]
                      - generic [ref=e191]:
                        - generic [ref=e192]:
                          - generic [ref=e193]:
                            - paragraph [ref=e194]: Click rate
                            - img [ref=e195]
                          - paragraph [ref=e197]: 2%
                        - progressbar "Click rate" [ref=e198]
                      - generic [ref=e201]:
                        - generic [ref=e202]:
                          - generic [ref=e203]:
                            - paragraph [ref=e204]: Click to open rate
                            - img [ref=e205]
                          - paragraph [ref=e207]: 13%
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
                            - generic: "156"
                          - generic:
                            - generic: "12"
                          - generic:
                            - generic: "0"
                      - generic [ref=e223]:
                        - generic [ref=e224]: Apr 13
                        - generic [ref=e225]: Apr 15
                        - generic [ref=e226]: Apr 17
                        - generic [ref=e227]: Apr 19
                        - generic [ref=e228]: Apr 21
                        - generic [ref=e229]: Apr 23
                        - generic [ref=e230]: Apr 25
                        - generic [ref=e231]: Apr 27
                        - generic [ref=e232]: Apr 29
                        - generic [ref=e233]: May 01
                        - generic [ref=e234]: May 03
                        - generic [ref=e235]: May 05
                        - generic [ref=e236]: May 07
                        - generic [ref=e237]: May 09
                        - generic [ref=e238]: May 11
                        - generic [ref=e239]: May 13
                    - generic [ref=e241]:
                      - generic [ref=e242]: "200"
                      - generic [ref=e243]: "150"
                      - generic [ref=e244]: "100"
                      - generic [ref=e245]: "50"
                      - generic [ref=e246]: "0"
                  - status [ref=e247]
                  - text: ●
                  - generic [ref=e248]:
                    - button [ref=e249] [cursor=pointer]:
                      - img
                    - button [ref=e250] [cursor=pointer]:
                      - img
                    - button [pressed] [ref=e251] [cursor=pointer]:
                      - img
                    - button [ref=e252] [cursor=pointer]:
                      - img
                    - button [ref=e253] [cursor=pointer]:
                      - img
                    - button [ref=e254] [cursor=pointer]:
                      - img
                    - menu:
                      - menuitem: Download SVG
                      - menuitem: Download PNG
                      - menuitem: Download CSV
              - generic [ref=e256]:
                - generic [ref=e257]:
                  - generic [ref=e258]:
                    - img [ref=e259]
                    - heading "Contacts" [level=2] [ref=e261]
                  - generic [ref=e265]:
                    - button "Select date range" [ref=e266] [cursor=pointer]: Last 30 Days
                    - img [ref=e268] [cursor=pointer]
                    - group
                - separator [ref=e270]
                - generic [ref=e272]:
                  - generic [ref=e273]:
                    - paragraph [ref=e274]: Total active contacts
                    - img [ref=e275]
                  - heading "58,801" [level=5] [ref=e277]
                - generic [ref=e278]:
                  - region "Additional contact metrics" [ref=e280]:
                    - generic [ref=e282]:
                      - generic [ref=e283]:
                        - paragraph [ref=e285]: New contacts today
                        - paragraph [ref=e286]: "0"
                      - separator [ref=e287]
                    - generic [ref=e289]:
                      - generic [ref=e290]:
                        - paragraph [ref=e292]: New contacts in this month
                        - paragraph [ref=e293]: "21"
                      - separator [ref=e294]
                    - generic [ref=e296]:
                      - generic [ref=e297]:
                        - paragraph [ref=e299]: New in last 30 days
                        - paragraph [ref=e300]: "21"
                      - separator [ref=e301]
                    - generic [ref=e303]:
                      - generic [ref=e304]:
                        - paragraph [ref=e306]: Unsubscribed in last 30 days
                        - paragraph [ref=e307]: "0"
                      - separator [ref=e308]
                  - generic [ref=e311]:
                    - application [ref=e312]:
                      - generic [ref=e314]:
                        - generic [ref=e318]:
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
                              - generic: "21"
                            - generic:
                              - generic: "0"
                            - generic:
                              - generic: "0"
                        - generic [ref=e321]:
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
                          - generic [ref=e337]: May 13
                      - generic [ref=e339]:
                        - generic [ref=e340]: "25"
                        - generic [ref=e341]: "20"
                        - generic [ref=e342]: "15"
                        - generic [ref=e343]: "10"
                        - generic [ref=e344]: "5"
                        - generic [ref=e345]: "0"
                    - status [ref=e346]
                    - text: ●
                    - generic [ref=e347]:
                      - button [ref=e348] [cursor=pointer]:
                        - img
                      - button [ref=e349] [cursor=pointer]:
                        - img
                      - button [pressed] [ref=e350] [cursor=pointer]:
                        - img
                      - button [ref=e351] [cursor=pointer]:
                        - img
                      - button [ref=e352] [cursor=pointer]:
                        - img
                      - button [ref=e353] [cursor=pointer]:
                        - img
                      - menu:
                        - menuitem: Download SVG
                        - menuitem: Download PNG
                        - menuitem: Download CSV
  - iframe [ref=e354]:
    - button "Chat widget" [ref=f8e4] [cursor=pointer]:
      - img "Opens Chat This icon Opens the chat window." [ref=f8e7]
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
> 15 |     await expect(this.myProfileMenuItem).toBeVisible({ timeout: 30000 });
     |                                          ^ Error: expect(locator).toBeVisible() failed
  16 |     await this.myProfileMenuItem.click();
  17 |   }
  18 | 
  19 |   
  20 | }
  21 | 
```