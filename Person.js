class Person 
{
    #name; 
    #age;
    #gender;
    
    constructor(name, age, gender)
    {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
    }

    getName() 
    {
        return this.#name;
    }

    getAge()
    {
        return this.#age;
    }

    getGender()
    {
        return this.#gender;
    }

    setName(name)
    {
        this.#name = name;
    }

    setAge(age)
    {
        this.#age = age;
    }

    setGender(gender)
    {
        this.#gender = gender;
    }
}

module.exports = Person;