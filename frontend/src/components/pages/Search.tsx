import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/helper/supabaseClient';
import Card from '../subcomponent/Card';
import { Input } from '../ui/input';
import { Hourglass } from "react-loader-spinner"

interface Service {
    id: number;
    created_at: string;
    title: string;
    Availability: string;
    description: string;
    shortDescription: string;
    price: number;

}

const Search: React.FC = () => {
    const [service, setService] = useState<Service[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [search, setSearch] = useState<string>("")

    const filtered = service.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('services')
                .select('*');

            if (error) {
                setErrorMessage("Could not find data");
                console.log(errorMessage)
            }

            if (data) {
                setErrorMessage("");
                setService(data);
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    if (service.length == 0) {
        return (
            <div className='h-screen w-full flex items-center justify-center'>
                <Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#15803d', '#86efac']}
                />

            </div>
        )
    } else {
        return (
            <div className=' m-auto  max-w-7xl '>
                <div className=" w-80 h-80 diffBorder absolute bg-green-200 top-10 rotate-90  -left-6"></div>
                <div className=" w-96 h-96 diffBorder absolute bg-green-200 top-40 rotate-45  right-24"></div>
                <div className=" w-40 h-40 diffBorder absolute bg-green-200 bottom-10 rotate-12  left-52"></div>
                <div className=' flex items-center justify-center '>
                    <h2 className="mb-4 mt-10 text-3xl font-extrabold tracking-tight leading-none text-green-800 md:text-5xl lg:text-6xl ">Available Srvice</h2>
                </div>
                <Input type="text" className='mt-6 w-96 mx-auto border-black' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                <div className=' flex flex-wrap justify-center items-center'>
                    {filtered ? (
                        filtered.map((data) => (
                            <Card
                                key={data.id} // Add a unique key prop for each item in the array
                                id={data.id}
                                title={data.title}
                                shortDescription={data.shortDescription}
                                price={data.price}
                            />
                        ))
                    ) : (
                        ""
                    )}
                </div>
            </div>
        );
    }
};

export default Search;
