function GetJobList() {
    const url = "https://api.lever.co/v0/postings/paralleldomain?mode=json";
    const options = {
        header: {
            "Content-Type": "application/json"
        }
    };
    return fetch(url, { options })
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }
            else {
                throw Error(res.json() | 'error')
            }
        })
        .then((res) => res)
}

export default GetJobList;