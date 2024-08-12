const Shimmer = () => {
    return <div data-testid="shimmer" className="restaurent-list flex mx-auto flex-wrap ">
        {Array(10).fill("").map((e,index) => (<div key={index} className="shimmer-card  w-56 h-96 m-5 p-5  rounded-md bg-slate-50"></div>))}
        
    </div>;
};

export default Shimmer;