const propertyCard = document.createElement("div");
propertyCard.className = "property-card";


const imageContainer = document.createElement("div");
imageContainer.className = "image-container";

const img = document.createElement("img");
img.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c";
img.alt = "House";

const favoriteIcon = document.createElement("div");
favoriteIcon.className = "favorite-icon";
favoriteIcon.innerHTML = '<i class="fa-regular fa-heart"></i>';

imageContainer.appendChild(img);
imageContainer.appendChild(favoriteIcon);


const propertyInfo = document.createElement("div");
propertyInfo.className = "property-info";

const propertyType = document.createElement("p");
propertyType.className = "property-type";
propertyType.textContent = "DETACHED HOUSE • 5Y OLD";

const price = document.createElement("h2");
price.className = "price";
price.textContent = "$750,000";

const address = document.createElement("p");
address.className = "address";
address.textContent = "742 Evergreen Terrace";

propertyInfo.appendChild(propertyType);
propertyInfo.appendChild(price);
propertyInfo.appendChild(address);

const propertyDetails = document.createElement("div");
propertyDetails.className = "property-details";

const bedrooms = document.createElement("div");
bedrooms.className = "bedrooms";
bedrooms.innerHTML = '<i class="fa-solid fa-bed"></i> <span>3 Bedrooms</span>';

const bathrooms = document.createElement("div");
bathrooms.className = "bathrooms";
bathrooms.innerHTML = '<i class="fa-solid fa-bath"></i> <span>2 Bathrooms</span>';

propertyDetails.appendChild(bedrooms);
propertyDetails.appendChild(bathrooms);


const realtorInfo = document.createElement("div");
realtorInfo.className = "realtor-info";

const realtorImg = document.createElement("img");
realtorImg.src = "https://randomuser.me/api/portraits/women/44.jpg";
realtorImg.alt = "Tiffany Heffner";
realtorImg.className = "realtor-img";

const realtorText = document.createElement("div");
realtorText.className = "realtor-text";

const realtorName = document.createElement("p");
realtorName.className = "realtor-name";
realtorName.textContent = "Tiffany Heffner";

const realtorContact = document.createElement("p");
realtorContact.className = "realtor-contact";
realtorContact.textContent = "(555) 555-4321";

realtorText.appendChild(realtorName);
realtorText.appendChild(realtorContact);

realtorInfo.appendChild(realtorImg);
realtorInfo.appendChild(realtorText);

propertyCard.appendChild(imageContainer);
propertyCard.appendChild(propertyInfo);
propertyCard.appendChild(propertyDetails);
propertyCard.appendChild(realtorInfo);


document.body.appendChild(propertyCard);
