import { routes } from "./utils.js";

export const printCard = (country) => {
  return `
    <section class="card__section">
      <div class="card__info">
        <img onerror ="onErrorImage(this)"src="${country.flags.svg}" alt="${country.name.common}" class="card__img" />
        <h2 class="card__title">${country.name.common}</h2>
        <p><span class="card__text">Region: </span>${country.region}</p>
        <p><span class="card__text">Capital: </span>${country.capital}</p>
        <p><span class="card__text">Population: </span>${country.population}</p>
        <a href="${routes.detail}_name/${country.name.common}" class="card__link">
          View More
        </a>
      </div>
    </section>
    `;
};

export const printDetail = (data) => {
  const {
    flags,
    name,
    capital,
    languages,
    borders,
    region,
    population,
    timezones,
    coatOfArms,
  } = data[0];

  return `
<article class="detail">
        <h2 class="detail__title">Details</h2>
        <section class="detail__section">
            <img  src=${flags.svg} alt=${name.common}  class="detail__img">
          <div>
            <p class="detail__info"><span class="detail__info--font">Name:</span> ${
              name.common ? name.common : "sin datos"
            }</p>
            <p class="detail__info"><span class="detail__info--font">Capital:</span> ${
              capital ? capital.join(", ") : "sin datos"
            }</p>
            <p class="detail__info"><span class="detail__info--font">Languages:</span> ${
              languages ? Object.values(languages).join(", ") : "sin datos"
            }</p>
            <p class="detail__info"><span class="detail__info--font">Borders:</span> ${
              borders ? borders.join(", ") : "sin datos"
            }</p>
            <p class="detail__info"><span class="detail__info--font">Region:</span> ${
              region ? region : "sin datos"
            }</p>
            <p class="detail__info"><span class="detail__info--font">Population:</span> ${
              population ? population : "sin datos"
            }</p>
            <p class="detail__info"><span class="detail__info--font">Time Zone:</span> ${
              timezones ? timezones.join(", ") : "sin datos"
            }</p>
          </div>
            <img   src=${coatOfArms?.svg} alt=${
    name.common
  } class="detail__img">
        </section>
      </article>
`;
};
