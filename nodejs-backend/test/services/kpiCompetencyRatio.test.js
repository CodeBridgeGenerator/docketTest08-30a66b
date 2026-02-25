const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("kpiCompetencyRatio service", async () => {
  let thisService;
  let kpiCompetencyRatioCreated;
  let usersServiceResults;
  let users;

  

  beforeEach(async () => {
    thisService = await app.service("kpiCompetencyRatio");

    // Create users here
    usersServiceResults = await app.service("users").Model.create(usersRefData);
    users = {
      createdBy: usersServiceResults[0]._id,
      updatedBy: usersServiceResults[0]._id,
    };
  });

  after(async () => {
    if (usersServiceResults) {
      await Promise.all(
        usersServiceResults.map((i) =>
          app.service("users").Model.findByIdAndDelete(i._id)
        )
      );
    }
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (kpiCompetencyRatio)");
  });

  describe("#create", () => {
    const options = {"typeOfForm":"new value","kpi":23,"competency":23,"employeeGrade":"new value"};

    beforeEach(async () => {
      kpiCompetencyRatioCreated = await thisService.Model.create({...options, ...users});
    });

    it("should create a new kpiCompetencyRatio", () => {
      assert.strictEqual(kpiCompetencyRatioCreated.typeOfForm, options.typeOfForm);
assert.strictEqual(kpiCompetencyRatioCreated.kpi, options.kpi);
assert.strictEqual(kpiCompetencyRatioCreated.competency, options.competency);
assert.strictEqual(kpiCompetencyRatioCreated.employeeGrade, options.employeeGrade);
    });
  });

  describe("#get", () => {
    it("should retrieve a kpiCompetencyRatio by ID", async () => {
      const retrieved = await thisService.Model.findById(kpiCompetencyRatioCreated._id);
      assert.strictEqual(retrieved._id.toString(), kpiCompetencyRatioCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"typeOfForm":"updated value","kpi":100,"competency":100,"employeeGrade":"updated value"};

    it("should update an existing kpiCompetencyRatio ", async () => {
      const kpiCompetencyRatioUpdated = await thisService.Model.findByIdAndUpdate(
        kpiCompetencyRatioCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(kpiCompetencyRatioUpdated.typeOfForm, options.typeOfForm);
assert.strictEqual(kpiCompetencyRatioUpdated.kpi, options.kpi);
assert.strictEqual(kpiCompetencyRatioUpdated.competency, options.competency);
assert.strictEqual(kpiCompetencyRatioUpdated.employeeGrade, options.employeeGrade);
    });
  });

  describe("#delete", async () => {
    it("should delete a kpiCompetencyRatio", async () => {

      ;

      const kpiCompetencyRatioDeleted = await thisService.Model.findByIdAndDelete(kpiCompetencyRatioCreated._id);
      assert.strictEqual(kpiCompetencyRatioDeleted._id.toString(), kpiCompetencyRatioCreated._id.toString());
    });
  });
});