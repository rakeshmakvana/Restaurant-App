import React from "react";
import "./Categories.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Categories = () => {
    const categories = [
        { name: "French Fries", img: "https://s3-alpha-sig.figma.com/img/c495/ed87/1338e2e608f2055840d3132745fa5027?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lkzNRroWqyXISaarYy-f3rxATwowX4QTjvTAf7Zs0-lDMT3YcWBSzGPw18k2Ix1of6XxjokupjUH944IEPDnkUcoaWyX1JqT-oFSeMYHnfODVMGFvusNJBP1deDciooQosYc76pklOpnoU8DHpCm61jfMfL~dAC8tDr70ChrkISqf~9bYIU6vhld4rx0BhVoBtMnZY9Ec7AqDes29NspWpwkpFK~2CqkWTorqV0BZutS0uYKd4UZwFZFuQ3ytCIrZ9IEZ5kjRDz2pngIeUaLtWMCjkzUe2N80SeBRG9CPrLLL78VrT3w7V4k8KN2CHk0UmS6koPYmFjUsxOrVVSeyA__" },
        { name: "Pizza", img: "https://s3-alpha-sig.figma.com/img/faf2/7874/1baa9ca44d18cb4e6ad9d0e0ee65e16e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TV9ejVstwP4YJXtYGKCtbopiZrTDaM-Td0uNK4qcfSs93aoAoxwndlPmH1W02N5eu9SyGYZ89oNaVRuH8zv1Q1QsYAaYmZ8f5dvBOZ~UFyezjzOf516dx7AwlDTmm3W-91xANfDX1TFxDztA59ewyJeE9XTMrEz9oLrGvQPB4KKsrelLE1I1Np~cy4ONnxzh8hyM6mWCuTKyOAMhaQjW~Kvk~zj~HZQrRA5ZIn2HqXhirtQpDprlzQd-XAHWoKfwarhuWz9KfdOtE7tqoK1cSQ~yDA8EDzg6xZfAhw1bg3E27t4FTkZDX1ijtRViZMLMSgFYkHPEqG5OXFTFKXWWOQ__" },
        { name: "Burger", img: "https://s3-alpha-sig.figma.com/img/4c35/4049/816c2daf777edc2ce51d2d4d7616ab6c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gy3aREIlPVOZ6vKLfX7vpjGSsJ9vJjBUBYCUtzFvEGvj1~42wNf3~kMwWnMBH25n6XSeP4wYXdxaMxZZWL9V03n4CiJniT9TgTNJey6q48j3-62-~s0-Q~ASOMtrzF0tsSGN52qqzgH0Tyt5Rus85TUgIaeGhrhg5qMdrZu-xe5Yp~fFsgdfEOlPB4jwzGuvKven7APbrV2~JlsiwDG2KBwAeYA6MU-cVZEeW01k01ohXMLrxLlgSKjioF1cLABi636HCNomY1T91fu6ojZvL4qArjzHH-LvtZg45SrvlSWhuVqIrOJuGDDuuEPy9LAGxnm9oiJ8hEameT839aUC3Q__" },
        { name: "Garlic Bread", img: "https://s3-alpha-sig.figma.com/img/e2b1/45e5/6369309f38fc63687028b9d4c6ef3fc6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LD4ij4OlH3-c6SxCY73jG2E-qFvKFj8ExX8ZxsEI2PbqFoUWZmIYHIRAOZz6r7H4QHVCMBPohCvwIlkVU-8wiotLCCENHF9UPCDgCLIvX~t9lggg71GUasbosL8WqgrrXxCjZ2NV0NRq70q06LZtzGgy3A4Zp8ZnqL0sX5yOREgRePQg-ZQxHphLpZ3gNPptNpt87KAN-dKWARd~jSZ72Zc87a8BlOAib1fx3Kwvvh9yqz4uFOk-3HhSAQnDmATwbySKs5E7sU1qr-j90XPQy7kV1GaptXH~SgYfwW7Qtglnl5V37VcJCiwhiyoaiXfdXcq185pGA0Cu9OXRC1Zicg__" },
        { name: "Pasta", img: "https://s3-alpha-sig.figma.com/img/b2b5/22c1/b2b21553ff3d5f1f017a3f7fe2bc121a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J0vBg6Gn3ZdfaejCUTeyEoKfd3OfsrIBydbrPX9GVg2sBxjK1pHU9OzAlR6AUcxKXVyJDuZ~Np5M07ikJaOZIXraNuhUOtJBR9JFak1Nnng0SdZhS9zlhDuVCFSqnocSEO1gxcqJqPdO0CZFQsJnUM9NPa4ZVQvokL1MLdOmm-1vskrT7aGpjmOckAiQcjcfcTOZA~y8BVfIsj7Ov31UsQzRpXkjqIxkVyY6O--efAwyha8Zh-DPvksWzT43SH1ko5xEv6iFiZfij~vFu~UJ0ZMm3Yyy7A5aV40WJ6Pk79HN2jhQvwqWT5pu~FHYoggdPiQMb~fik5j6vUp5RgLzug__" },
        { name: "Sandwich", img: "https://s3-alpha-sig.figma.com/img/c495/ed87/1338e2e608f2055840d3132745fa5027?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lkzNRroWqyXISaarYy-f3rxATwowX4QTjvTAf7Zs0-lDMT3YcWBSzGPw18k2Ix1of6XxjokupjUH944IEPDnkUcoaWyX1JqT-oFSeMYHnfODVMGFvusNJBP1deDciooQosYc76pklOpnoU8DHpCm61jfMfL~dAC8tDr70ChrkISqf~9bYIU6vhld4rx0BhVoBtMnZY9Ec7AqDes29NspWpwkpFK~2CqkWTorqV0BZutS0uYKd4UZwFZFuQ3ytCIrZ9IEZ5kjRDz2pngIeUaLtWMCjkzUe2N80SeBRG9CPrLLL78VrT3w7V4k8KN2CHk0UmS6koPYmFjUsxOrVVSeyA__" },
        { name: "Rice Noodles", img: "https://s3-alpha-sig.figma.com/img/1709/479c/631cde4dea97ae258cc9a076f8168ef4?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OhZOe3qMOGCt6mktJfJUgeVIqIlzo4~fGxI4iwpprbaO40OSB1hPWFs7YTdyewiWjsTAritI5pGR6r6Wkaz78WZjAACgKr6vmbeyMmkdN9fNAdmttP1X9xnKzAOUIgL9W94FEjXrd6I28KJL~xTb0J-BezKs4uUSS2EVffnILHcFGMpYD0dyAoW65E5ArUKgd2EOvoNJ8CMX7FGXvKoSvcmyPWsaZF7PUrlgPPpYm0m6DcqONZJ9j~QF~M8c4ZQyi-SPy83elYlaZej-RCXkYlQeJ2RJC7ET-4zHphHtnlqTaUiuxP74FWooktqZYmk4J8HCSZs8xJaLRAxC4GD8Kg__" },
        { name: "Dosa", img: "https://s3-alpha-sig.figma.com/img/2742/a27a/6606f0148ae2e7a371e44992c507a39d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JoWxnMMDrT8OzWNawU1sb8qrazqJhY-o-cMkBmXDOK2pAJfu9Vo2emRRakEykNpx7TtkGQ4P-8TvX2JX8g3Z6KQjLiMWfTFItmx8e59jWDTgIK4fAdUMa3hkuGc9GFBetRjp64PKFbmvQ-ksPzoBvJg7o0iZnkSz7pkl4Zbn3LPxocyDAOsRY7f3JO5ePo~i2Gz6ehLxWyPyrbk9eB8-GoYQunzfvBAf2qRXVhSvABJa6K-Qvvig9Zd09KFcIO4X3wNSkeYChxYsaMZXq91gE87QCsq00-Jpew-1-YvfX2MHyiNbkZfHUWsJevtQN1RMofE8WORZbLgqEm7Zl~7PGQ__" },
        { name: "Noodles", img: "https://s3-alpha-sig.figma.com/img/4be4/6a80/266cafd085e4b3434385d5d0f1b82773?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zi8nApf081BbgeDsPW1bul7MMAZGu4p8TuYQHVTTK8ift0TNWKYZqMJuPqA1~iQjJcKITl0MWKpcrxeG1RaPUDV4mqw224npaMX26b2UBCZIHkyIIta7uVeqXKqcC~Wl7vosA6fwhOrWxhjcAdnf2mEAO4wE8IQyZEIFskIQru05LYrxuoq3staNrE-IVBG82znF81mEV203M3x7idNrTCjn~aSCnWqZcmjT5twRxoEVHIiZZeXnYRNZu1kGYaOx6St20DJmKDxL3SwVs1nWt7JfgQQH~lTEzp-83t5fiupms2Anw65coEFaPnvh~KwFxWR2Boq6BwUXVX-PZm~Eag__" },
        { name: "Biryani", img: "https://s3-alpha-sig.figma.com/img/9509/92dd/347b319cdac491293850e7fda723766c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j4RyE1FeKDey5usyR9o~7t81otXNPSqovQC9VS9gvcL16YAAXYSSp1caa21NFK~xbbCaoYsyyxOou03DMyIzBlWk~lOnfIJ3jSGKb5qk6SHSx22PYCSfzYjVK4lMZtueXpWKMDGJYleBamotp8JoS0NQHRtrJJuLaRv1H8-hUf8cEVQ9DXs~R14KvWnWmNCKW~yZzojKERiMJIiKo7aicLMcHCL3Tcxmgik7ukhe9Gjf-geFmRQUHTMabNquuVlHam9BIOU~Uce2ZxR~3VpXO6sz2~Nt0MobaHVGsGLOnW7lba9PuYgIdq1Lu0-Qu-nwWdBouYPegTzRwisHCampvw__" },
        { name: "Biryani Rice", img: "https://s3-alpha-sig.figma.com/img/1ee4/5224/e15f061a7b210453e1ff10c0316ff753?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j~MKcBLqi6iXI4L5qmOSwpryH4XT3oEKXTRpnbwoaduzibmj-z-z2rnGSgn-eNrzg4AvxlhlVBs-EfF0b-~8Z6Aj9NA707xZw9Q0BUHi8j1mOpAB2nvICAklK3B4ujetw9~ZrL2P5o~Mn2MnGM414EFp1b5LK88kmg9YLLvNQaDKT9gYG4OFGPxrOZhOcWtkA2Gwpjjuou9kebfZ94AfXRkDp2qgHXY3-ke~ap0oBVZ0~C3d5lAbvsDPqaE2pPnQRwVZWit4eh6l6y9VBkGzBwzlESBqCGPy5JKEefr3d~ZlEDxZH0aePJeG6njoddpWwAGU5FVTfbe5NHGlad8TLQ__" },
        { name: "Italian Pasta", img: "https://s3-alpha-sig.figma.com/img/2949/8973/e128ee7f0f53529326f2677355cd9a76?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QzVs-vECBJM8MgHyUu70-JZZEqjtoOqvIHjeWWppT4sYk4L8cvDWcZWmEmt-dtNKDIj5P63x7qzrl9kfZWSmZoqjCFWpl26HUyYDu4vc2SDhDifh76nXMKrodqysEcAbHllCtyIUFwtcIGsWC8OqScrUTZZXWJdw0E2wXdXq55YfHuT-Wqsf3IePKr-5AD9vGVydoWeNWF8BMRkahdaIFznkkFLhLqpXRNvwFCyg2dRNvib3xKFdqHzvp-huxDwREYfGrSD5g6l5~qUTYIz1KmYWSBUzG4m2NuySyvYAnsK~4YRkErayAbmGgNhGG4lAE1vGr1CBafUxBltVG-6HIQ__" },
        { name: "Salad", img: "https://s3-alpha-sig.figma.com/img/3fa0/30f0/094b9cac478897f8edf6966424239499?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DeWURgcrgq~W0aQqyHfiCxRnEtgYVTC8AJxZR7tE1GLeshEgNB6yBGLP2iNk8TyzJIweR-UPCJmc5-g67DUAu4OlaTD1NIJkkwNYnl3hK~JbDAHvBixrEs9mTMZBIllrchfQgmHOixDjo6ckyT7EukaoemSyO3qt8JGZFQTNSDCUdYK5HKN5gWSTzIvHjrhGi2wca4xcPxynCxP0Vg7nSLfMD4oneK7y6kZrpd7kbR0xyzDvDMH85R96Nmq~4B20fgi87w~jlA0Beg1cwVDioAi~AnBlFCBMEMgoXLfza7LKvgiBZ2BZ-wQsEAOFo3qxYzHimwApGDK0TLDgn7J~Ig__" },
        { name: "Mix Salad", img: "https://s3-alpha-sig.figma.com/img/c5cb/0828/bbf3c3d3fb51915d3e61faae3b8a7ec9?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WTQKRG-kY4HBsdO82-9RwGSE5oIVK8JV1ncBUjjHrqZ2cmKVpggXlRc4anlh71W47fNv0Z1kUiW6WFn0-JvFOsyEez7voUQxqy9IxleGCI~BQn68Cljvn3p4G9Od3333hKNfENMAdrR2fvZE-4H-qyGZ4Fmnpfj4DIW2eFRRQI1IUutvkPkRGDcabUkhCJjnlHSMOtzZRyuG2CS895Z5wbawd-ab7lvVC4FU9U-yeN3s~enDNWuoaJUZiKBJssvwXkD6J5yOfh-gZeS4elOxL2H2Q4A~0GqQmaze0SMhDo6NGkTAz7JmZsDasItzQqWmVPTW7SBASdURYc6j2bx4Dw__" },
        { name: "Paneer Chili", img: "https://s3-alpha-sig.figma.com/img/fafe/fc33/635ff4d5075fea10df90e50b3e372e79?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HBVdzV8zV2KaBnTIHp28OkFMl3CluKiS~jgpH13-foHbDWxrXly~4FJVTi3SwWUQQfJQzekoftGZ4XlhJBxXLH~3qRg9ABDtMacGO-E7zblaU3Vne-rzkb65q1ALp9wqSVlhsLo558k5pVVBeSdAcBOpYNl~-YZX04uQtJGFnW8sI5cd0-2avCH9H8gWNaHhHxP2pOz2G-UgazeYMfo0ZvZJD0YsxCsZTX21ypZ~jvUKDtNlbsH~ID6F6ZLvQf09xWOdQVThijsx8nPwwnVP-303peejTNweJeu9CvgCGsMe2FaW17Lpw5kuloetKmrSU--g42qbxw~Xp1nPw2hegQ__" },
        { name: "Paneer Chili", img: "https://s3-alpha-sig.figma.com/img/fafe/fc33/635ff4d5075fea10df90e50b3e372e79?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HBVdzV8zV2KaBnTIHp28OkFMl3CluKiS~jgpH13-foHbDWxrXly~4FJVTi3SwWUQQfJQzekoftGZ4XlhJBxXLH~3qRg9ABDtMacGO-E7zblaU3Vne-rzkb65q1ALp9wqSVlhsLo558k5pVVBeSdAcBOpYNl~-YZX04uQtJGFnW8sI5cd0-2avCH9H8gWNaHhHxP2pOz2G-UgazeYMfo0ZvZJD0YsxCsZTX21ypZ~jvUKDtNlbsH~ID6F6ZLvQf09xWOdQVThijsx8nPwwnVP-303peejTNweJeu9CvgCGsMe2FaW17Lpw5kuloetKmrSU--g42qbxw~Xp1nPw2hegQ__" },
        { name: "Paneer Chili", img: "https://s3-alpha-sig.figma.com/img/fafe/fc33/635ff4d5075fea10df90e50b3e372e79?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HBVdzV8zV2KaBnTIHp28OkFMl3CluKiS~jgpH13-foHbDWxrXly~4FJVTi3SwWUQQfJQzekoftGZ4XlhJBxXLH~3qRg9ABDtMacGO-E7zblaU3Vne-rzkb65q1ALp9wqSVlhsLo558k5pVVBeSdAcBOpYNl~-YZX04uQtJGFnW8sI5cd0-2avCH9H8gWNaHhHxP2pOz2G-UgazeYMfo0ZvZJD0YsxCsZTX21ypZ~jvUKDtNlbsH~ID6F6ZLvQf09xWOdQVThijsx8nPwwnVP-303peejTNweJeu9CvgCGsMe2FaW17Lpw5kuloetKmrSU--g42qbxw~Xp1nPw2hegQ__" },
        { name: "Paneer Chili", img: "https://s3-alpha-sig.figma.com/img/fafe/fc33/635ff4d5075fea10df90e50b3e372e79?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HBVdzV8zV2KaBnTIHp28OkFMl3CluKiS~jgpH13-foHbDWxrXly~4FJVTi3SwWUQQfJQzekoftGZ4XlhJBxXLH~3qRg9ABDtMacGO-E7zblaU3Vne-rzkb65q1ALp9wqSVlhsLo558k5pVVBeSdAcBOpYNl~-YZX04uQtJGFnW8sI5cd0-2avCH9H8gWNaHhHxP2pOz2G-UgazeYMfo0ZvZJD0YsxCsZTX21ypZ~jvUKDtNlbsH~ID6F6ZLvQf09xWOdQVThijsx8nPwwnVP-303peejTNweJeu9CvgCGsMe2FaW17Lpw5kuloetKmrSU--g42qbxw~Xp1nPw2hegQ__" },
    ];

    return (
        <div className="categories-container">
            <div className="header d-flex align-items-center justify-content-start py-4 px-3" style={{background: "rgba(31, 29, 43, 1)"}}>
                <MdOutlineKeyboardArrowLeft className="icon text-light" />
                <h2 className="text-light m-0 ms-auto" style={{fontSize:"18px"}}>Categories</h2>
            </div>


            <div className="container py-3" style={{background:"black" , minHeight:"100vh"}}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="text-light m-0" style={{fontSize:"18px"}}>Categories</h3>
                    <span className="badge bg-light text-dark px-3 py-2">100</span>
                </div>
                <div className="row g-3">
                    {categories.map((item, index) => (
                        <div className="col-6 col-md-3" key={index}>
                            <div className="category-card text-center p-3">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="category-img img-fluid"
                                />
                                <p className="text-light mt-2 mb-0">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
