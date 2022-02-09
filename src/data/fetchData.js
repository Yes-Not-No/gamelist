async function fetchData() {
    const games = await fetch('https://api.npoint.io/817eebf87e3033d5dc99')
        .then(res => res.json())
        .then((data) => {
            return data;
        })

    return games;

}

export { fetchData }


