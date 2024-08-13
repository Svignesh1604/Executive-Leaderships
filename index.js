document.addEventListener('DOMContentLoaded', () => {
    const members = document.querySelectorAll('.team-member');
    
    members.forEach(member => {
        member.addEventListener('click', () => {
            member.classList.toggle('expanded');
        });
    });
});
