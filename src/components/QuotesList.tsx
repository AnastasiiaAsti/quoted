export default function QuotesList({quotes,loading}) {
    return (
        <div className="flex flex-col items-center justify-between p-5">
            {
                loading ? (
                    <p>Loading quotes...</p>
                ) :
                    quotes.length === 0 ? (
                        <p>No quotes yet</p>
                    ) : (
                            quotes.map((quote, index) => {
                                return (
                                    <div className="items-center w-80 flex md:flex-row-reverse flex-wrap bg-gray-800 rounded-lg p-5 mb-4" key={index}>
                                        <div className="">
                                            <img className="w-20 h-20 rounded-full mr-4" src="/placeholder.png" alt="Avatar"></img>
                                        </div>
                                        <div className="">
                                            <p className="text-sm text-gray-400">{quote.data().createdAt.toDate().toDateString()}</p>
                                            <p className="text-gray-400">{quote.data().nameOfAuthor}</p>
                                        </div>
                                        <div className="w-full pt-4">
                                            <p className="uppercase">' {quote.data().quote} '</p>
                                        </div>
                                    </div>
                                )
                            })
                    )}
        </div>
    )
}