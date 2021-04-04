
export default function closeModal() {
                  const modalClose = document.querySelector('.modal__close-btn')
            const backdropRef = document.querySelector('.backdrop')
            modalClose.addEventListener('click', closeModal);
            function closeModal() {
                backdropRef.classList.add('visually-hidden')
            }
            window.addEventListener('keydown',closeModalKey)
            function closeModalKey(event) {
                if (event.code === "Escape") {
                    backdropRef.classList.add('visually-hidden')
                }
            }
            backdropRef.addEventListener('click', closeModalBack)
            function closeModalBack() {
                   backdropRef.classList.add('visually-hidden')
            }  
           }