
const closeButton = document.querySelector('.lightbox-close');
const lightBox = document.querySelector('.lightbox')

closeButton.onclick = function(){
	event.preventDefault();
	lightBox.classList.add('hidden');
}

const galleryItems = document.querySelectorAll('.gallery-item')
// console.log(galleryItems)

for(let i = 0; i < galleryItems.length; i++){
	const item = galleryItems[i];
	console.log(item);
	item.onclick = function(event){
		//SHOW LIGHTBOX
		lightBox.classList.remove('hidden')


		//GET CURRENT GALLERYITEM
		const elementCLickedOn = event.target;
		const galleryItemParent = elementCLickedOn.parentElement;
		console.log(elementCLickedOn);
		
		//REPLACE IMG IN LIGHTBOX
		const lightboxImage = document.querySelector('.lightbox-image');
		lightboxImage.innerHTML = galleryItemParent.innerHTML;
		console.log(lightboxImage)
	}

}