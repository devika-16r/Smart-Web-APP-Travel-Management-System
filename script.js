const placesData = {
    sunny: [
        { name: "Miami", description: "A vibrant city known for its beaches.", image: "https://www.mayflower.com/_next/image?url=https%3A%2F%2Fmayflowerc.wpenginepowered.com%2Fwp-content%2Fuploads%2F2022%2F05%2FMiami-City-Guide_Header-scaled.jpg&w=3840&q=75" },
        { name: "Bali", description: "An Indonesian paradise with lush landscapes.", image: "https://media.digitalnomads.world/wp-content/uploads/2021/01/20120709/bali-for-digital-nomads.jpg" },
        { name: "Dubai", description: "A luxurious city with iconic skyscrapers.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygH8i-Id7sZ3EXPtyNEnZhiMkZa5tjIVKQA&s" },
        { name: "Rio de Janeiro", description: "Famous for its Copacabana beach.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbZgY7P82VBTdeAEoVkjg4unvqc-B-FTJ6w&s" },
        { name: "Hawaii", description: "A tropical paradise with beautiful islands.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFzljWzTPX4tC5BJqrFPmWwJb0wGrj4yCijg&s" },
        { name: "Maldives", description: "Known for its stunning overwater bungalows.", image: "https://d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/jp12287d138859/jp12287d138859-1-hotel_carousel_large.jpg?version=7" },
        { name: "Santorini", description: "A picturesque island in Greece.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNA-lSkKcG8H7GOWrAO13XSVmhxLlIi7Wgvg&s" },
        { name: "Cancun", description: "Famous for its beautiful beaches.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVREz5wJ3-Kq0guwY75ZMdZI0Ps9MimlXEA&s" },
        { name: "Phuket", description: "A popular island in Thailand.", image: "https://www.aleenta.com/wp-content/uploads/Islands-to-Explore-from-Phuket.jpg" },
        { name: "Gold Coast", description: "Known for its surfing beaches.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/27/77/5b/photo0jpg.jpg?w=500&h=500&s=1" },
    ],
    rainy: [
        { name: "Seattle", description: "Known for its rainy weather and coffee.", image: "https://images.squarespace-cdn.com/content/v1/59663860be6594968ff0cc56/1597584567531-WWFUXX3BGRO28A09KWW8/DSCF2419_Export.jpg?format=1000w" },
        { name: "London", description: "Famous for its drizzly climate.", image: "https://plus.unsplash.com/premium_photo-1661962726504-fa8f464a1bb8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2VudHJhbCUyMGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Vancouver", description: "A coastal city with frequent rain.", image: "https://imagedelivery.net/sgOsJ9gQ7Om_GGWR8aiqMw/4b7491e1-e601-479b-5829-82d06f162300/width=3840" },
        { name: "Tokyo", description: "Experiences a lot of rain in summer.", image: "https://media.nomadicmatt.com/2024/tokyothings.jpeg" },
        { name: "Bangalore", description: "Pleasant weather with occasional rains.", image: "https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/1432fedb88c0d1cc56f4c496a80f251c.jpg" },
        { name: "New Orleans", description: "Rainy weather adds charm to its culture.", image: "https://cdn.audleytravel.com/1080/771/79/1336500-balcony-new-orleans.webp" },
        { name: "Istanbul", description: "Experiences rain, especially in spring.", image: "https://rodinistanbul.com/wp-content/uploads/2023/04/day-trips-from-istanbul-copy.jpg" },
        { name: "Mumbai", description: "Famous for its monsoon season.", image: "https://www.holidaymonk.com/wp-content/uploads/2022/04/Gateway-Of-India-MUMBAI.jpg" },
        { name: "Kuala Lumpur", description: "Tropical rainstorms are common.", image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/06/27/db21c1ad1685e09d3d5e140c867de0c7_1000x1000.jpg" },
        { name: "Dublin", description: "A city known for its beautiful parks and rain.", image: "https://content.r9cdn.net/rimg/dimg/43/32/a04a5913-city-7362-168ed971525.jpg?crop=true&width=1020&height=498" },
    ],
    snowy: [
        { name: "Aspen", description: "A famous ski resort in Colorado.", image: "https://www.travelandleisure.com/thmb/Yiq3rXHGmHnDrgzBsGmEvqjHxSo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/aspen-colorado-lead-ASPENTG0122-3bd432152d1f4758b1b89fd8a3a231cc.jpg" },
        { name: "Zermatt", description: "Home to the iconic Matterhorn.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09TMoH6h-FBrs8lxl3UW08EgIXGgF-W7o-g&s" },
        { name: "Banff", description: "A picturesque town in the Canadian Rockies.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIS302cAif9HK1WYvm7MPeE-qj0Wj5LkXctg&s" },
        { name: "Chamonix", description: "A ski resort town in the French Alps.", image: "https://frenchmoments.eu/wp-content/uploads/2012/11/Chamonix-Mont-Blanc-Featured-Image-web-copyright-French-Moments.jpg" },
        { name: "Reykjavik", description: "Iceland's capital, known for its winter beauty.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdRlecJFBqG3ho8bSuRwIBsu4jusc2oKmGQ&s" },
        { name: "Lake Tahoe", description: "A stunning area for winter sports.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoeugfYHS-Gnp5kJPzbXvOfVE8srBbAUy6jA&s" },
        { name: "Whistler", description: "A popular ski destination in Canada.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKjOIzi1g-4-JDRNMPe21qreaYaandFZm3g&s" },
        { name: "St. Moritz", description: "A luxury alpine resort in Switzerland.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNXZmt_a5dZKTq5Znr61dqyCt6g3yRHyThTg&s" },
        { name: "Niseko", description: "Known for its powder snow in Japan.", image: "https://res.cloudinary.com/jnto/image/upload/w_1080,h_600,c_fill,f_auto,fl_lossy,q_60/v1/media/filer_public/a3/51/a351c6a3-0646-449f-9530-a643b877bcaf/niseko_snow_report_8_january_2022_2_k5aj4w" },
        { name: "Jackson Hole", description: "Famous for skiing in Wyoming.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Barns_grand_tetons.jpg/1200px-Barns_grand_tetons.jpg" },
    ]
};

function goBack() {
    window.history.back();
}

function displayPlaces() {
    const params = new URLSearchParams(window.location.search);
    const weather = params.get('weather');
    const placesList = document.getElementById('places-list');
    placesList.innerHTML = ""; // Clear previous results

    if (placesData[weather]) {
        placesData[weather].forEach(place => {
            const placeDiv = document.createElement('div');
            placeDiv.classList.add('place');
            placeDiv.innerHTML = `
                <h3>${place.name}</h3>
                <p>${place.description}</p>
                <img src="${place.image}" alt="${place.name}" width="200" />
            `;
            placesList.appendChild(placeDiv);
        });
    }
}

// Call the displayPlaces function when the page loads
window.onload = displayPlaces;