import React from 'react'

function ShopSidebar() {
  return (
    <>
    <div className="col-lg-3 col-md-4">
                {/* <!-- Price Start --> */}
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by price</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" onChange={()=>true} className="custom-control-input" checked id="price-all"/>
                            <label className="custom-control-label" htmlFor="price-all">All Price</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" onChange={()=>true} className="custom-control-input" id="price-1"/>
                            <label className="custom-control-label" htmlFor="price-1">$0 - $100</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" onChange={()=>true} className="custom-control-input" id="price-2"/>
                            <label className="custom-control-label" htmlFor="price-2">$100 - $200</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                    </form>
                </div>
                {/* <!-- Price End --> */}
                
                {/* <!-- Color Start --> */}
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by color</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" onChange={()=>true} className="custom-control-input" checked id="color-all"/>
                            <label className="custom-control-label" htmlFor="price-all">All Color</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" onChange={()=>true} className="custom-control-input" id="color-1"/>
                            <label className="custom-control-label" htmlFor="color-1">Black</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" onChange={()=>true} className="custom-control-input" id="color-2"/>
                            <label className="custom-control-label" htmlFor="color-2">White</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                    </form>
                </div>
                {/* <!-- Color End --> */}

                {/* <!-- Size Start --> */}
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by size</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" onChange={()=>true} className="custom-control-input" checked id="size-all"/>
                            <label className="custom-control-label" htmlFor="size-all">All Size</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" onChange={()=>true} className="custom-control-input" id="size-1"/>
                            <label className="custom-control-label" htmlFor="size-1">XS</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" onChange={()=>true} className="custom-control-input" id="size-2"/>
                            <label className="custom-control-label" htmlFor="size-2">S</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                    </form>
                </div>
                {/* <!-- Size End --> */}
            </div>
    </>
  )
}

export default ShopSidebar