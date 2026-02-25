
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
typeOfForm: faker.lorem.sentence(""),
kpi: faker.lorem.sentence(""),
competency: faker.lorem.sentence(""),
employeeGrade: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
