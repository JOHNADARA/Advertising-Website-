// Enhanced script.js with targeting
document.addEventListener('DOMContentLoaded', () => {
    const adContainer = document.getElementById('ad-container');
    const userAds = document.getElementById('user-ads');
    const adForm = document.getElementById('ad-form');

    // Sample ads with targeting metadata
    const ads = [
        { title: 'Coffee Deal', content: 'Get 10% off!', image: 'https://via.placeholder.com/150', target: { location: 'New York', interest: 'food' } },
        { title: 'Tech Gadget', content: 'Latest release!', image: 'https://via.placeholder.com/150', target: { device: 'mobile', interest: 'tech' } }
    ];

    // Simulated user data (replace with real data collection)
    const user = {
        location: 'New York',
        device: 'mobile',
        interests: ['food', 'tech']
    };

    // Function to filter ads based on targeting
    function getTargetedAds(user, ads) {
        return ads.filter(ad => {
            const target = ad.target || {};
            return (
                (!target.location || target.location === user.location) &&
                (!target.device || target.device === user.device) &&
                (!target.interests || user.interests.some(interest => target.interest === interest))
            );
        });
    }

    // Display targeted ads
    function displayAds(container, ads) {
        container.innerHTML = '';
        ads.forEach(ad => {
            const adElement = document.createElement('div');
            adElement.classList.add('ad');
            adElement.innerHTML = `
                <h3>${ad.title}</h3>
                <p>${ad.content}</p>
                ${ad.image ? `<img src="${ad.image}" alt="${ad.title}">` : ''}
            `;
            container.appendChild(adElement);
        });
    }

    // Show targeted ads on load
    const targetedAds = getTargetedAds(user, ads);
    displayAds(adContainer, targetedAds);

    // Handle ad submission with targeting options
    adForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('ad-title').value;
        const content = document.getElementById('ad-content').value;
        const image = document.getElementById('ad-image').value || '';
        // Add targeting fields to the form in HTML for real use
        const newAd = { title, content, image, target: { location: 'New York', interest: 'food' } };
        
        ads.push(newAd);
        const updatedTargetedAds = getTargetedAds(user, ads);
        displayAds(adContainer, updatedTargetedAds);
        displayAds(userAds, [newAd]);
        
        adForm.reset();
    });
});