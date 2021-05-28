import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from '../MovieCard';

const movieDetailsDummy = { "id": 726684, "overview": "To join Adrien in Shanghai, Marinette is going to visit her uncle Wang who is celebrating his anniversary. But, as soon as she arrives in China, her purse gets stolen with Tikki inside, whom she needs to secretly transform into Ladybug! Without money and alone in the immense city, Marinette accepts the help of a young and resourceful girl, Fei. The two girls will ally and discover the existence of a new magical jewel, the Prodigious. Hawk Moth, also present in Shanghai, seeks to finding it since a long time...", "posterPath": "/msI5a9TPnepx47JUb2vl88hb80R.jpg", "releaseDate": "2021-04-04", "title": "Miraculous World: Shanghai – The Legend of Ladydragon" }


test('renders movie card loading skeleton correctly', () => {
    const tree = renderer.create(<MovieCard loading />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders movie card correctly', () => {
    const tree = renderer.create(<MovieCard movieDetails={movieDetailsDummy} />).toJSON();
    expect(tree).toMatchSnapshot();
});
