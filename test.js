const { assert } = require("console");


const url = 'https://www.autohero.com/de/search/'


describe('Filter tests', function () {

  test('Check filter apply', function (browser) {
    browser
      .url(url)
      .click('#carMakeFilter')
      .click('[data-qa-selector="905"]')
      .click('[data-qa-selector-value="Golf"]')
      .click('#basicFilter')
      .click('[data-qa-selector="select-mileage-to"] [data-qa-selector-value="25000"]')
      .click('#basicFilter')
      .assert.containsText('[data-qa-selector-value="Volkswagen"] .button___50Uee', 'Marke: Volkswagen')
      .assert.containsText('[data-qa-selector-value="Golf"] .button___50Uee', 'Modell: Golf')
      .assert.containsText('[data-qa-selector-value="Bis 25.000 km"] .button___50Uee', 'Kilometer: Bis 25.000 km')
      .end();
  });
});