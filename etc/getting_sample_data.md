# Getting sample data

Open https://www.airbnb.com/s/Santa-Cruz--CA and paste this into DevTools Console:

```javascript
copy([].concat.apply([], document.querySelectorAll('[itemtype="http://schema.org/Enumeration"]')).map(l => ({
  id: l.getAttribute('data-id') - 0,
  name: l.getAttribute('data-name'),
  instantBook: l.getAttribute('data-instant-book') === 'true',
  price: l.getElementsByClassName('price-amount-container')[0].innerText.split(' ')[1] - 0,
  starRating: l.getAttribute('data-star-rating') - 0,
  reviewsCount: l.getAttribute('data-review-count') - 0,
  previewImageURL: l.getElementsByTagName('img')[0].src,
})));
```
