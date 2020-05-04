const createDoctor = (name, specialty, address) => ({
    name: name,
    specialty: specialty,
    address: address
})

const createPet = (name, breed) => ({
    name: name,
    breed: breed
})

let BowWowKennels = []
BowWowKennels.push(createPet('sam', 'hound'))
BowWowKennels.push(createPet('sam', 'terrier'))
BowWowKennels.push(createPet('fifi', 'unknown'))