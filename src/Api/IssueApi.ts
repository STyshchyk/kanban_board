import {createApi, fetchBaseQuery, FetchBaseQueryError} from '@reduxjs/toolkit/query/react'


// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints

export const issueApi = createApi({
    reducerPath: 'issueApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '',
    }),
    endpoints: (builder) => ({
        getPullRequests: builder.query<any, string>({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                // get a random user
                const randomResult = await fetchWithBQ(_arg)

                if (randomResult.error)
                    return {error: randomResult.error as FetchBaseQueryError}

                const promises: any = randomResult.data && Array.isArray(randomResult.data) && randomResult.data.map((elem: any) => {
                    return fetchWithBQ(elem.issue_url)
                })


                async function getPrice() {
                    const [...data] = await Promise.all([
                        ...promises
                    ]);
                    return data;
                }

                let data = await getPrice();
                console.log(data)
                // const result = await fetchWithBQ("https://api.github.com/repos/facebook/react/issues/26689")
                return randomResult.data
                    ? {data: randomResult.data}
                    : {error: randomResult.error}
            },
        }),
    }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {useGetPullRequestsQuery} = issueApi