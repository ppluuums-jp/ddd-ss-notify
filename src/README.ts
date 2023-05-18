/**
 * @module QUESTION_SHEET_DETECTION
 */

/**
 * @description
 * A system for detecting changes in google spread sheets.
 */

/**
 * @usage
 * 1. Create clasp project with sheets and push this codes.
 *
 * 2. Set environment variables (script properties)
 *  - TARGET_SPREADSHEET_IDS: IDs of the spreadsheets to monitor for changes
 *    - Ex: ["xxxxxxx", "yyyyyyy"]
 *  - EMAILS: Email addresses to notify when changes occur
 *    - Ex: ["a@gmail.com", "b@gmail.com"]
 *  - THRESHOLD: Threshold (in minutes) for how far back to notify about changes
 *    - Ex: 120
 *      - If you want to be notified about changes within the last 120 minutes, set it to 120
 * - WEBHOOK_URL: Slack webhook url
 *    - Ex: https://hooks.slack.com/services/xxxxxxxxx/xxxxxxxxx/xxxxxxxxxxxxxxxxxxxxxxxx
 * - SLACK_IDS: Slack ids
 *    - Ex: ["a", "b"]
 *
 * 3. Set up a trigger
 *  - Function to run: main
 *  - Deployment: Head
 *  - Event source: Time-driven
 *  - Type of time-based trigger: Choose any time unit
 *    - Ex: If THRESHOLD is 120, the time-based trigger type should be "Timer based on time".
 *    - *Note: Set it according to the THRESHOLD value you have set above.
 *  - Time interval: Choose any time interval
 *    - Ex: If THRESHOLD is 120, the time interval should be "Every 2 hours".
 *    - *Note: Set it according to the THRESHOLD value you have set above.
 */
