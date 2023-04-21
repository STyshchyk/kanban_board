import {createApi, fetchBaseQuery, FetchBaseQueryError} from '@reduxjs/toolkit/query/react'
import {logDOM} from "@testing-library/react";

// Define a service using a base URL and expected endpoints
export const issueApi = createApi({
    reducerPath: 'issueApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '',
        mode: "no-cors"
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
                console.log(promises)

                async function getPrice() {
                    const [...data] = await Promise.all([
                        ...promises
                    ]);
                    return data;
                }

                // const newRes = Promise.allSettled([...promises])
                let data = await getPrice();
                console.log(data)
                const result = await fetchWithBQ("https://api.github.com/repos/facebook/react/issues/26689")
                return result.data
                    ? {data: result.data}
                    : {error: result.error as FetchBaseQueryError}
            },
        }),
    }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {useGetPullRequestsQuery} = issueApi