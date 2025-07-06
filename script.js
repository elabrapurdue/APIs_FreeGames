$(document).ready(function () {
  
    //const apiUrl = "https://cors-anywhere.herokuapp.com/https://www.gamerpower.com/api/giveaways?platform=steam&type=loot&sort-by=popularity";
const apiUrl = "https://corsproxy.io/?https://www.gamerpower.com/api/giveaways?platform=steam&type=loot&sort-by=popularity";

  $.getJSON(apiUrl, function (data) {
    data.slice(0, 12).forEach(item => {
      const card = `
        <div class="card">
          <img src="${item.image}" alt="${item.title}">
          <h2>${item.title}</h2>
          <p><strong>Worth:</strong> ${item.worth}</p>
          <p>${item.description.substring(0, 80)}...</p>
          <a href="${item.open_giveaway_url}" target="_blank">Claim Giveaway</a>
        </div>
      `;
      $('#giveaway-container').append(card);
    });
  }).fail(function () {
    $('#giveaway-container').html("<p>Failed to load giveaways. Please try again later.</p>");
  });
});
