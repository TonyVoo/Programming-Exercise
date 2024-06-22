// JavaScript for tooltip (optional)
const logoTooltip = document.querySelector('.logo-tooltip');

logoTooltip.addEventListener('mouseover', function() {
  const tooltipText = this.querySelector('.tooltip-text');
  tooltipText.style.visibility = 'visible';
  tooltipText.style.opacity = '1';
});

logoTooltip.addEventListener('mouseout', function() {
  const tooltipText = this.querySelector('.tooltip-text');
  tooltipText.style.visibility = 'hidden';
  tooltipText.style.opacity = '0';
});

// Optional JavaScript to toggle dropdown
document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});
