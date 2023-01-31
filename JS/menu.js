const all_page = document.querySelector('.all-page')
const content_page = document.querySelector('.content-page')
const menu_page = document.querySelector('.menu-page')

function openPage() {
    menu_page.style.cssText="width: 300px"
    content_page.style.cssText="margin-left: 0"
    all_page.style.cssText="height: 100vh"

    menu_page.classList.add('ttt')
    content_page.classList.add('ttt')
    all_page.classList.add('ttt')
}

function closePage() {
    menu_page.style.cssText="width: 0"
    content_page.style.cssText="margin-left: 0"
    all_page.style.cssText="height: 0"
}
