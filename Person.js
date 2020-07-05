class Person 
{
    // Private attributes.
    #name; 
    #age;
    #gender;
    
    constructor(name, age, gender) // Constructor.
    {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
    }

    // Getters.
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

    // Setters.
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