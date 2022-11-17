
export default () => ({
    isLoading: true,
    entries: [
        {
            // deberñia de venir de la base de datos
            id: new Date().getTime(), // 123456789
            date: new Date().toDateString(), // sat 17, noviembre
            text: 'In pellentesque erat vitae maximus lacinia. Maecenas volutpat erat orci, et vehicula sapien semper eu. Praesent sagittis dapibus magna, sit amet posuere nulla consectetur quis. ',
            picture: null, // http://
        },
        {
            // deberñia de venir de la base de datos
            id: new Date().getTime() + 1000, // 123456789
            date: new Date().toDateString(), // sat 17, noviembre
            text: 'Fusce ornare lorem dolor, in scelerisque nisl dictum varius. Donec at diam consectetur, auctor lacus eget, ultricies sem. Mauris euismod risus commodo neque dapibus, eget molestie justo condimentum.',
            picture: null, // http://
        },
        {
            // deberñia de venir de la base de datos
            id: new Date().getTime() + 2000, // 123456789
            date: new Date().toDateString(), // sat 17, noviembre
            text: 'Sed commodo aliquet metus, quis lobortis eros iaculis dapibus. Nullam fermentum non tellus quis porttitor. Sed metus ante, hendrerit vel enim non, suscipit pharetra magna. ',
            picture: null, // http://
        },
    
    ]
}) 