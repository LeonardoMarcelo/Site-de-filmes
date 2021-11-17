const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '6fa043e9abe8b1d83d1967fdcde3ba87',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;