/**
 * Environment variables
 * @field
 * sheetName: Store sheet name
 * targetSSIds: Target spread sheet ids
 * emails: Email addresses
 * threshold: Minutes
 * slackIds: Slack ids
 * webHookUrl: Slack webhook url
 */
const config: Config = {
  sheetName: PropertiesService.getScriptProperties().getProperty('SHEET_NAME') || 'Sheet1',
  targetSSIds: JSON.parse(PropertiesService.getScriptProperties().getProperty('TARGET_SPREADSHEET_IDS')) || [],
  emails: JSON.parse(PropertiesService.getScriptProperties().getProperty('EMAILS')) || [],
  threshold: parseInt(PropertiesService.getScriptProperties().getProperty('THRESHOLD'), 10) || undefined,
  slackIds: JSON.parse(PropertiesService.getScriptProperties().getProperty('SLACK_IDS')) || [],
  webHookUrl: PropertiesService.getScriptProperties().getProperty('WEBHOOK_URL') || '',
};

type Config = {
  sheetName: string;
  targetSSIds: string[];
  emails: string[];
  threshold: number;
  slackIds: string[];
  webHookUrl: string;
};
