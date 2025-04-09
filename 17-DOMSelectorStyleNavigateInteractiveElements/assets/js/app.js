const propertyCard = document.createElement("div");
propertyCard.className = "property-card";
propertyCard.style.width='350px'
propertyCard.style.backgroundColor='#fff'
propertyCard.style.borderRadius='12px'
propertyCard.style.overflow='hidden'
propertyCard.style.transition='transform 0.3s'
propertyCard.style.boxShadow=' 0 4px 12px rgba(0, 0, 0, 0.15);'



const imageContainer = document.createElement("div");
imageContainer.className = "image-container";
imageContainer.style.position='relative'
imageContainer.style.width='100%'
imageContainer.style.height='230px'
imageContainer.style.overflow='hidden'

const img = document.createElement("img");
img.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c";
img.alt = "House";
img.style.width='100%'
img.style.height='100%'
img.style.objectFit='cover'

const favoriteIcon = document.createElement("div");
favoriteIcon.className = "favorite-icon";
favoriteIcon.innerHTML = '<i class="fa-regular fa-heart"></i>';
favoriteIcon.style.position='absolute'
favoriteIcon.style.top='12px'
favoriteIcon.style.right='12px'
favoriteIcon.style.borderRadius='50%'
favoriteIcon.style.padding='8px'
favoriteIcon.style.cursor='pointer'
favoriteIcon.style.boxShadown='0 2px 8px rgba(0, 0, 0, 0.2)'


imageContainer.appendChild(img);
imageContainer.appendChild(favoriteIcon);


const propertyInfo = document.createElement("div");
propertyInfo.className = "property-info";
propertyInfo.style.padding='15px 20px'

const propertyType = document.createElement("p");
propertyType.className = "property-type";
propertyType.textContent = "DETACHED HOUSE • 5Y OLD";
propertyType.style.color='#888'
propertyType.style.fontSize='14px'
propertyType.style.marginBottom='5px'

const price = document.createElement("h2");
price.className = "price";
price.textContent = "$750,000";
price.style.color='#222'
price.style.fontSize='24px'
price.style.marginTop='5px'

const address = document.createElement("p");
address.className = "address";
address.textContent = "742 Evergreen Terrace";
address.style.fontSize='14px'
address.style.color='#555'
address.style.marginTop='5px'








propertyInfo.appendChild(propertyType);
propertyInfo.appendChild(price);
propertyInfo.appendChild(address);

const propertyDetails = document.createElement("div");
propertyDetails.className = "property-details";
propertyDetails.style.display='flex'
propertyDetails.style.justifyContent='space-around'
propertyDetails.style.padding='15px 20px'
propertyDetails.style.borderTop='1px solid #eee'
propertyDetails.style.borderBottom='1px solid #eee'








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
realtorInfo.style.display='flex'
realtorInfo.style.alignItems='center'
realtorInfo.style.padding='15px 20px'

const realtorImg = document.createElement("img");
realtorImg.src = "https://randomuser.me/api/portraits/women/44.jpg";
realtorImg.alt = "Tiffany Heffner";
realtorImg.className = "realtor-img";
realtorImg.style.width='50px'
realtorImg.style.height='50px'
realtorImg.style.borderRadius='50%'
realtorImg.style.objectFit='cover'
realtorImg.style.marginRight='15px'

const realtorText = document.createElement("div");
realtorText.className = "realtor-text";
realtorText.style.fontWeight='bold'
realtorText.style.color='#555'

const realtorName = document.createElement("p");
realtorName.className = "realtor-name";
realtorName.textContent = "Tiffany Heffner";
realtorName.style.fontWeight='bold'
realtorName.style.color='#555'



const realtorContact = document.createElement("p");
realtorContact.className = "realtor-contact";
realtorContact.textContent = "(555) 555-4321";
realtorContact.style.fontWeight='bold'
realtorContact.style.color='#555'

realtorText.appendChild(realtorName);
realtorText.appendChild(realtorContact);

realtorInfo.appendChild(realtorImg);
realtorInfo.appendChild(realtorText);

propertyCard.appendChild(imageContainer);
propertyCard.appendChild(propertyInfo);
propertyCard.appendChild(propertyDetails);
propertyCard.appendChild(realtorInfo);


document.body.appendChild(propertyCard);
