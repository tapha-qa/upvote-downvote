// const topNavBtn = document.getElementsByClassName('top-nav-btn');
// const topNavLinks = document.getElementsByClassName('top-nav-nav');
let topNavLinks = document.getElementById('top-nav-id');

const toggleStates = () => {
    // toggle between visible and hidden
    if (topNavLinks.style.display === 'none') {
        // Toggle state
        topNavLinks.style.display = 'block';
        console.error('Links have appeared.');
    } else {
        // Set state to display none
        topNavLinks.style.display = 'none';
        console.error('Links have disappeared.');
    }
}