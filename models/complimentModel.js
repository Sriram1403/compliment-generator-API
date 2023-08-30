const faker = require('faker');

const complimentThemes = {
    empowerment: ['strong', 'confident', 'empowered', 'determined', 'fearless'],
    creativity: ['creative', 'innovative', 'imaginative', 'artistic', 'visionary'],
    positivity: ['positive', 'optimistic', 'uplifting', 'joyful', 'radiant']
};

class ComplimentModel {
    generateCompliment(theme, language, name) {
        faker.locale = language;
        const randomAdjective = faker.random.arrayElement(complimentThemes[theme]);
        const randomNoun = faker.commerce.productName();
        const personalizedCompliment = `Hey ${name}, you are so ${randomAdjective}, like a ${randomNoun}!`;
        return personalizedCompliment;
    }
}

module.exports = new ComplimentModel();
