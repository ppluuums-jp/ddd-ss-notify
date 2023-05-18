/**
 * Main function to execute
 */
function main() {
  const provider = new Provider();

  // Get the updated sheets
  const updatedSSheets = provider.getSheets
    .execute({ ids: config.targetSSIds })
    .filter((v) => v.isModifiedWithInThreshold());

  if (updatedSSheets.length === 0) return console.log('No updated sheets found'); // Exit if no updated sheets

  // Write the updated contents to the sheet
  provider.writeSheet.execute({
    updatedSSheets: updatedSSheets,
  });

  // Send emails
  provider.sendEmails.execute({
    updatedSSheets: updatedSSheets,
  });

  // Notify on Slack
  provider.postMessage.execute({
    updatedSSheets: updatedSSheets,
  });
}
