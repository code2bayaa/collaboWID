import VIDEOS from "./video"

const YOUTUBE = () => {

    const videos = [
        'bqM4wySj61U?si=zYj6bjyy-9t9WxfO',
        'Fm4gEsYCV3k?si=DLZtHFgtNENlJrhC',
        'LpSxoB-wQco?si=xldqgNDCaBNZ1yGy',
        'TkNceKfr1fQ?si=FAfFCJHdfkNkUz5m',
        'XLna9XWQUG0?si=6ZGwVXwRiYVBhw86',
        '9ZUHZvGFqL4?si=ms8uxCG8bRFgK6Bj',
        '0nnNy0Jvaug?si=TSbF04N_InXs5nML',
        'zJvT7y3jsgU?si=SmDbnINDKsCD-hz8',
        'WVGJGcXalfA?si=Yh_8DcKT-LncSSiE',
        'Pocu7v8poRc?si=PD3Lpp9ilZp3Wy1K',
        'xnwEuq7GgP8?si=oS7vro8kGJxAxCcY',
        'RHKjXUyHY6g?si=q_senXfx1c6jnJej',
        '4eX9cr_m2ow?si=cE2NCtC2Y5yeG_Ab',
        'mwiRPkCf3qQ?si=tRw-Ejk5VlooLfZq',
        'XBlfZJi_xns?si=URIdTSnsxzsE71Q0',
        '97eaAoArTEA?si=n-25dBpQVeNnmHB7',
        'Kpx_1RkH2-Q?si=zVWuoVX1oWHa7oT4',
        'B_BiI6K0lYw?si=-WQqZlJo-Y5k1rG4',
        'xJ6X4uQWxvc?si=yKK3MbWNDhpqrLiN',
        'd8gEU8Mjn_M?si=NQhahoTmUViKvdkj',
        'M8w6MnazMy0?si=i_PzEVl3ZqQdZXPz',
        'z0UYyXnJt_Q?si=TTqJTNuBrYnDsSCn',
        'UpP4DcU_wVE?si=rdMRrU0DU9QuJF-u',
        'M8w6MnazMy0?si=exjeY6BoFX2yB9n6',
        'z0UYyXnJt_Q?si=OVnsa10dOVYEsQu1'
    ]

    return (
        <div className = "with-medium with-row">
            {videos.map((video, index) => 
                <VIDEOS videoTag={video} key={index}/>
            )}
        </div>
    )
}

export default YOUTUBE