
    module.exports = function (app) {
        const modelName = "kpi_competency_ratio";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            typeOfForm: { type:  String , comment: "Type of Form, p, false, true, true, true, true, true, true, , , , ," },
kpi: { type: Number, max: 10000000, comment: "Kpi, p_number, false, true, true, true, true, true, true, , , , ," },
competency: { type: Number, max: 10000000, comment: "Competency, p_number, false, true, true, true, true, true, true, , , , ," },
employeeGrade: { type:  String , comment: "Employee Grade, p, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };