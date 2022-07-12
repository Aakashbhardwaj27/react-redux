const explorer = {
    name: "root",
    isFolder: true,
    item: [
        {
            name: 'public',
            isFolder: true,
            item: [
                {
                    name: 'Assets',
                    isFolder: true,
                    item: [
                        {
                            name: 'Images',
                            isFolder: true,
                            item: [
                                {
                                    name: 'image1.png',
                                    isFolder: false,
                                    
                                },
                            ]
                        },
                    ]
                }, 
                {
                    name: 'App.js',
                    isFolder: false,
                  
                },
                {
                    name: 'more...',
                    isFolder:true,
                    item: [
                    {
                        name: 'public',
                        isFolder: true,
                        item: [
                            {
                                name: 'Assets',
                                isFolder: true,
                                item: [
                                    {
                                        name: 'Images',
                                        isFolder: true,
                                        item: [
                                            {
                                                name: 'image1.png',
                                                isFolder: false,
                                                
                                            },
                                        ]
                                    },
                                ]
                            }, 
                            {
                                name: 'App.js',
                                isFolder: false,
                              
                            },
                        ]
                    },
                    {
                        name: 'src',
                        isFolder: true,
                        item:[    {
                            name: 'index.html',
                            isFolder: false,
                            
                        },
                        {
                            name: 'profile.html',
                            isFolder: false,
                            
                        },
                        ]
                    },
                    {
                        name: 'package.json',
                        isFolder: false,
                        
                    },
                    {
                        name: 'index.js',
                        isFolder: false,
                        
                    },
            
                ]}
            ]
        },
        {
            name: 'src',
            isFolder: true,
            item:[    {
                name: 'index.html',
                isFolder: false,
                
            },
            {
                name: 'profile.html',
                isFolder: false,
                
            },
            ]
        },
        {
            name: 'package.json',
            isFolder: false,
            
        },
        {
            name: 'index.js',
            isFolder: false,
            
        },

    ]
}
export default explorer