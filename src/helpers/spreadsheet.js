import config from "../config";
/**
 * Load the cars from the spreadsheet
 * Get the right values from it and assign.
 */
export function load(callback) {
  console.log("inside load ",callback)
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "thisweek!A2:L"
      })
      .then(
        response => {
          console.log(response);
          const data = response.result.values;
          const outcomes = data.map(outcome => ({
            student: outcome[1],
            title: outcome[2],
            company: outcome[3],
            careerCoach: outcome[4],
            quarter: outcome[5],
            location: outcome[6],
            program: outcome[7],
            instructionalteam: outcome[8],
            admissionsproducer: outcome[9],
            studentimg:outcome[10]
          })) || [];

          callback({
          outcomes
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}

export default load;
