
// Service data - in production, this would be fetched from an API 
let services = []; 
 
// Load services from JSON file 
async function loadServices() { 
    try { 
        const response = await fetch('data/services.json'); 
        services = await response.json(); 
        displayServices(services); 
    } catch (error) { 
        console.error('Error loading services:', error); 
        // Fallback to hardcoded data if JSON file not found 
        services = [ 
           { 
                id: 1, 
                name: "Kumar Electrical Services", 
                category: "electrician", 
                phone: "+94771234567", 
                location: "Negombo", 
                rating: 4.5, 
                experience: "10 years", 
                description: "Expert in home and commercial electrical work" 
            }, 
            { 
                id: 2, 
                name: "Perera Plumbing", 
                category: "plumber", 
                phone: "+94772345678", 
                location: "Colombo 7", 
                rating: 4.8, 
                experience: "8 years", 
                description: "24/7 emergency plumbing services" 
            }, 
            { 
                id: 3, 
                name: "Silva Auto Repairs", 
                category: "mechanic", 
                phone: "+94773456789", 
                location: "Gampaha", 
                rating: 4.3, 
                experience: "15 years", 
                description: "Certified mechanic for all vehicle types" 
            } 
        ]; 
        displayServices(services); 
    } 
} 
 
// Display services in the grid 
function displayServices(servicesToDisplay) { 
    const servicesList = document.getElementById('servicesList'); 
     
    if (servicesToDisplay.length === 0) { 
        servicesList.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 1rem;">No services found matching your criteria.</p>'; 
        return; 
    } 
     
    servicesList.innerHTML = servicesToDisplay.map(service => ` 
        <div class="service-card"> 
            <div class="service-header"> 
                <div> 
                    <h3>${service.name}</h3> 
                    <span class="service-category">${service.category}</span> 
                </div> 
            </div> 
            <div class="service-info"> 
                <p><strong>📍Location:</strong> ${service.location}</p> 
                <p><strong>💼Experience:</strong> ${service.experience}</p> 
                <p><strong>📝Description:</strong> ${service.description}</p> 
                <div class="rating"> 
                    ${generateStars(service.rating)} (${service.rating}) 
                </div> 
            </div> 
            <div class="service-contact"> 
                <a href="tel:${service.phone}" class="btn btn-primary">📞Call</a> 
                <a href="https://wa.me/${service.phone.replace('+', '')}" class="btn btn-secondary" target="_blank">WhatsApp</a> 
            </div> 
        </div> 
    `).join(''); 
} 
 
// Generate star rating 
function generateStars(rating) { 
    const fullStars = Math.floor(rating); 
    const hasHalfStar = rating % 1 !== 0; 
    let stars = ''; 
     
for (let i = 0; i < fullStars; i++) { 
        stars += '⭐'; 
    } 
if (hasHalfStar) { 
    stars += '⭐'; 
} 
     
    return stars; 
} 
 
// Search functionality 
function setupSearch() { 
    const searchInput = document.getElementById('searchInput'); 
    const categoryFilter = document.getElementById('categoryFilter'); 
     
    searchInput.addEventListener('input', filterServices); 
    categoryFilter.addEventListener('change', filterServices); 
} 
 
// Filter services based on search and category 
function filterServices() { 
    const searchTerm = document.getElementById('searchInput').value.toLowerCase(); 
    const category = document.getElementById('categoryFilter').value; 
     
    const filtered = services.filter(service => { 
        const matchesSearch = service.name.toLowerCase().includes(searchTerm) || 
                            service.description.toLowerCase().includes(searchTerm) || 
                            service.location.toLowerCase().includes(searchTerm); 
         
        const matchesCategory = category === 'all' || service.category === category; 
         
        return matchesSearch && matchesCategory; 
    }); 
     
    displayServices(filtered); 
} 
 
// Initialize the app 
document.addEventListener('DOMContentLoaded', () => { 
    loadServices(); 
    setupSearch(); 
}); 
