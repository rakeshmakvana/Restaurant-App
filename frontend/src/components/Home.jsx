import React, { useState } from 'react';
import '../styles/home.css';
import logo2 from '../assets/logo3.png';
import { IoIosSearch } from 'react-icons/io';
import { PiShoppingCartFill } from 'react-icons/pi';

function Home() {

    const menuItems = [
        {
            name: 'Hamburger Cheeseburger',
            price: '₹6.29',
            orders: 200,
            img: 'https://s3-alpha-sig.figma.com/img/ecd2/40ce/7c550720ab20af0840548a832e0f9a28?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VHwj0HpFhyvXMXougxwOGigAuYhhz5xGoxu9sT~It7pocMwzxxZxESRhlX8CF3sugxlhq3m5Y0eEGOVTa2HFOsS7r7REZx4NjMsnXXLR17OH-MUVGat8OY16oPHXO101GZIa8jyiUZFG7GryJU8U84JJHeqdP4wap6KHyOJJiUtYzwo1QMoeVObY9foa6TZ8iBa3Lv4Nq5WFgHfN7-QUMVVL0Bp~CTd5Dgd3zppphvVeoVO2SIeNkX~RcaGjT8Ktd1Ix3P~fRKsfP3AD-aK3d2Jr0vOZv59JswVHOIImOx2IfJyfOU9eiAKEmZf12zhjPtUMwZ37QfzwzL-BiRzl4Q__'
        },
        {
            name: 'New York Style Pizza',
            price: '₹6.29',
            orders: 180,
            img: 'https://s3-alpha-sig.figma.com/img/9304/8643/62ff4b6ad64248fed58d509495443e72?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eczxwdm--dppBpK~a23caMhfV-s8S7an4E0pnDTr~l~U760eG~ZEN0E9RF0BDaQ5YBgssPsThJ4fJ6QBOit2T0I22mZEhPMB6MYotAIZAlHoaVmV7BHVKJeWQv3D6j6boHgKyi5Lk1nYbL1yjTz4tlJyah~U30-OfszwKNcb1-kcuVXFHvltUFgmAHSOI0oWPDMv6fXYVKKS60Q6iyFqtjZgfRmJJVgro8jE8cWyp41T~K9yKzjiigNhLDu86r6emSCmRxVdUej5zbVe9Sx4QNbXd8txLE2KmDDAUGrCbjjEO7g~g0L4rL-izAe2nuR4SUPulJ3IXns1rGod0PEk9w__'
        },
        {
            name: 'Noodles',
            price: '₹6.29',
            orders: 120,
            img: 'https://s3-alpha-sig.figma.com/img/3017/7d08/15f39151bb465ae579ffcbc87e58057c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dJcqQKMNt21Sc~blIG2Sp9ZP6oQ23PG8QtW2PNh~1QByBCk5z5Xks5Bwlj3dawSJ~O~jc3OoYJ1AW6IlWJePXixKIJyQweNSr~qt5INdNMyD8P3YKv7BqTH68UAIxhxStmC8g~~q-1ff9z0RWhmHSxiHVQOkg8C6e7xrQJ1QL~YO7p9rZD789OicoZARb~GP1gA5AqzuicWjrPi2oilXXArANCxkSg0KklZMRVzHV~-loGMVOxPDTiN7VNNCt1lWwigd1HWbfPOCYvJ0XvPqxwZEQMZT6OtIVKzNsADR8CpUEYf61t~BZJ2DTnI-DPuN0ogAUcEaA2zHjKDgIFqsww__'
        },
        {
            name: 'Italian Pasta',
            price: '₹6.29',
            orders: 80,
            img: 'https://s3-alpha-sig.figma.com/img/fafe/fc33/635ff4d5075fea10df90e50b3e372e79?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZRzQ-iNwTRYe9brq37pHhvbwU1HYJKdnJM~b2y11sbahvCaXDiBuLco6Zfdj~BbtT-qTC2ztXawkbZp5k9-eGkmhBDJdhbjqpM1lxiK2Anc0nlWKS28sKHGBb5aFk0TQ8Ss2E~NPRouru4Ot0DOY4aeMj1V~mab1km70vhlMf6GAQk2koww0WiwCTVzT0KavkZhoM01QGpnsDJ-F08ZD~HQd3xkMfs0CFTJWy2im~n4u8mjsIUpeKTQKhowMwJGy7toUPZIAJogecAb75zDYEc6nUfNcBRhY68r0b7zVjDwai-vie7ihGvqdfGHF2dSHfvEk7IezqFSgT4wfRoYv~w__'
        },
        {
            name: 'Pasta',
            price: '₹6.29',
            orders: 50,
            img: 'https://s3-alpha-sig.figma.com/img/cf9f/8303/b780ff052314d2e493bc05b86e687a64?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6y-nnSqDSllJ9IKgzwByNAIM2hWxQICoqiNhr8qKGoN-TiS6F6dPFVNuqGKvpdbJP7AMVM1TFCKmd3M28RM59wHtnbWpB7xEAc7omDgQL-OZh3ltivfulL94-FyYVDpRrXCxpZXBp3SUSxPjhtc~8GDnLG1jz7C141wQYbPTuA~HZ1UKYG4qeKAhn9zTvgZISC0MzcYYEbCNoJvwhX-8RDqikvzE~Lu-nkGvMKyay5vKqaOnV~S~GNwnkc5z-iqqwDu322Bmmyeip1mf5iDUCO4hZYEeHxTWnruR1h5BDljEFaZo1QKoA9h4ZtdukB8nzzK6YtfBdayHXHWIvLuWA__'
        }
    ];

    const categories = [
        {
            name: 'All',
            img: 'https://s3-alpha-sig.figma.com/img/ecd2/40ce/7c550720ab20af0840548a832e0f9a28?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VHwj0HpFhyvXMXougxwOGigAuYhhz5xGoxu9sT~It7pocMwzxxZxESRhlX8CF3sugxlhq3m5Y0eEGOVTa2HFOsS7r7REZx4NjMsnXXLR17OH-MUVGat8OY16oPHXO101GZIa8jyiUZFG7GryJU8U84JJHeqdP4wap6KHyOJJiUtYzwo1QMoeVObY9foa6TZ8iBa3Lv4Nq5WFgHfN7-QUMVVL0Bp~CTd5Dgd3zppphvVeoVO2SIeNkX~RcaGjT8Ktd1Ix3P~fRKsfP3AD-aK3d2Jr0vOZv59JswVHOIImOx2IfJyfOU9eiAKEmZf12zhjPtUMwZ37QfzwzL-BiRzl4Q__',
            items: menuItems
        },
        {
            name: 'French Fries',
            img: 'https://s3-alpha-sig.figma.com/img/c495/ed87/1338e2e608f2055840d3132745fa5027?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nhILtNuuV3lIDCczz3ZpOfjITdERi6otSzccuFLK8vnmY5-VWwIDFANUfrbDlBPiiCDRfbL5Rk60YM3Jy6ugZye26tIZ6G6QLnPIQ8deAnb8sxgqQMIE8yuDgAOeuXVxyukBV0~H37CVQuBV1XbdwWLzSU0o~lxIOWwOz4pvZuNtGIE~5-BGToZEFsa~MKticTMmUPQ69YyA7rxA1~rHHt8YjMlNl9W0ywJrs6PvNmbjnlaDd7NMmBZSK-PhVi~HekfKJx87aQGMKcJKqulpqtjf73N25IjcavgSvBUWByVey9cOBiMdVJ2bKjvfT32lcHJ8fv3xrppe1t~XdrIjXw__  ',
            items: [
                { img: "https://s3-alpha-sig.figma.com/img/c495/ed87/1338e2e608f2055840d3132745fa5027?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nhILtNuuV3lIDCczz3ZpOfjITdERi6otSzccuFLK8vnmY5-VWwIDFANUfrbDlBPiiCDRfbL5Rk60YM3Jy6ugZye26tIZ6G6QLnPIQ8deAnb8sxgqQMIE8yuDgAOeuXVxyukBV0~H37CVQuBV1XbdwWLzSU0o~lxIOWwOz4pvZuNtGIE~5-BGToZEFsa~MKticTMmUPQ69YyA7rxA1~rHHt8YjMlNl9W0ywJrs6PvNmbjnlaDd7NMmBZSK-PhVi~HekfKJx87aQGMKcJKqulpqtjf73N25IjcavgSvBUWByVey9cOBiMdVJ2bKjvfT32lcHJ8fv3xrppe1t~XdrIjXw__", name: 'Crispy Fries', price: '₹3.99', orders: 150 },
                { img: "https://s3-alpha-sig.figma.com/img/c495/ed87/1338e2e608f2055840d3132745fa5027?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nhILtNuuV3lIDCczz3ZpOfjITdERi6otSzccuFLK8vnmY5-VWwIDFANUfrbDlBPiiCDRfbL5Rk60YM3Jy6ugZye26tIZ6G6QLnPIQ8deAnb8sxgqQMIE8yuDgAOeuXVxyukBV0~H37CVQuBV1XbdwWLzSU0o~lxIOWwOz4pvZuNtGIE~5-BGToZEFsa~MKticTMmUPQ69YyA7rxA1~rHHt8YjMlNl9W0ywJrs6PvNmbjnlaDd7NMmBZSK-PhVi~HekfKJx87aQGMKcJKqulpqtjf73N25IjcavgSvBUWByVey9cOBiMdVJ2bKjvfT32lcHJ8fv3xrppe1t~XdrIjXw__", name: 'Curly Fries', price: '₹4.29', orders: 100 },
                { img: "https://s3-alpha-sig.figma.com/img/c495/ed87/1338e2e608f2055840d3132745fa5027?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nhILtNuuV3lIDCczz3ZpOfjITdERi6otSzccuFLK8vnmY5-VWwIDFANUfrbDlBPiiCDRfbL5Rk60YM3Jy6ugZye26tIZ6G6QLnPIQ8deAnb8sxgqQMIE8yuDgAOeuXVxyukBV0~H37CVQuBV1XbdwWLzSU0o~lxIOWwOz4pvZuNtGIE~5-BGToZEFsa~MKticTMmUPQ69YyA7rxA1~rHHt8YjMlNl9W0ywJrs6PvNmbjnlaDd7NMmBZSK-PhVi~HekfKJx87aQGMKcJKqulpqtjf73N25IjcavgSvBUWByVey9cOBiMdVJ2bKjvfT32lcHJ8fv3xrppe1t~XdrIjXw__", name: 'Crispy Fries', price: '₹3.99', orders: 150 },
                { img: "https://s3-alpha-sig.figma.com/img/c495/ed87/1338e2e608f2055840d3132745fa5027?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nhILtNuuV3lIDCczz3ZpOfjITdERi6otSzccuFLK8vnmY5-VWwIDFANUfrbDlBPiiCDRfbL5Rk60YM3Jy6ugZye26tIZ6G6QLnPIQ8deAnb8sxgqQMIE8yuDgAOeuXVxyukBV0~H37CVQuBV1XbdwWLzSU0o~lxIOWwOz4pvZuNtGIE~5-BGToZEFsa~MKticTMmUPQ69YyA7rxA1~rHHt8YjMlNl9W0ywJrs6PvNmbjnlaDd7NMmBZSK-PhVi~HekfKJx87aQGMKcJKqulpqtjf73N25IjcavgSvBUWByVey9cOBiMdVJ2bKjvfT32lcHJ8fv3xrppe1t~XdrIjXw__", name: 'Curly Fries', price: '₹4.29', orders: 100 },
                { img: "https://s3-alpha-sig.figma.com/img/c495/ed87/1338e2e608f2055840d3132745fa5027?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nhILtNuuV3lIDCczz3ZpOfjITdERi6otSzccuFLK8vnmY5-VWwIDFANUfrbDlBPiiCDRfbL5Rk60YM3Jy6ugZye26tIZ6G6QLnPIQ8deAnb8sxgqQMIE8yuDgAOeuXVxyukBV0~H37CVQuBV1XbdwWLzSU0o~lxIOWwOz4pvZuNtGIE~5-BGToZEFsa~MKticTMmUPQ69YyA7rxA1~rHHt8YjMlNl9W0ywJrs6PvNmbjnlaDd7NMmBZSK-PhVi~HekfKJx87aQGMKcJKqulpqtjf73N25IjcavgSvBUWByVey9cOBiMdVJ2bKjvfT32lcHJ8fv3xrppe1t~XdrIjXw__", name: 'Crispy Fries', price: '₹3.99', orders: 150 },
            ]
        },
        {
            name: 'Burger',
            img: 'https://s3-alpha-sig.figma.com/img/ecd2/40ce/7c550720ab20af0840548a832e0f9a28?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VHwj0HpFhyvXMXougxwOGigAuYhhz5xGoxu9sT~It7pocMwzxxZxESRhlX8CF3sugxlhq3m5Y0eEGOVTa2HFOsS7r7REZx4NjMsnXXLR17OH-MUVGat8OY16oPHXO101GZIa8jyiUZFG7GryJU8U84JJHeqdP4wap6KHyOJJiUtYzwo1QMoeVObY9foa6TZ8iBa3Lv4Nq5WFgHfN7-QUMVVL0Bp~CTd5Dgd3zppphvVeoVO2SIeNkX~RcaGjT8Ktd1Ix3P~fRKsfP3AD-aK3d2Jr0vOZv59JswVHOIImOx2IfJyfOU9eiAKEmZf12zhjPtUMwZ37QfzwzL-BiRzl4Q__',
            items: [
                { img: "https://s3-alpha-sig.figma.com/img/2219/e5be/2ad9d683186e027903e0156fdf01e726?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yugwqo5fKrfewW5C9noLhHOo7nXXX83aizfm2~r9I7PORYNKMofkCQy933VPrCa~OUrRQu090jbwbSS~~2ZlBcMR420UGvPtJ4B0CYWI~Y2MlfT943Xu03aSNWXOFTcSSgdtDaopPMzh0ifYTmzWZUz4OajsVzIXIHjxp3X51CkG145XAmzO8O6iLXqczEQCxbkqhhaHCuCGDrluDdjo2SGSP5UgBqE0o7b0WwHC3E0rGUuZ9i4IAPZ2bykhNGbO3kaQeyFxVgO3MTycuOZdIOWly-BLa9cj3OCx729ERYtVaPwfATcbQQiGupgg772yHtvD14kbP3rYt2FWUNW6EA__", name: 'Cheeseburger', price: '₹5.99', orders: 250 },
                { img: "https://s3-alpha-sig.figma.com/img/2219/e5be/2ad9d683186e027903e0156fdf01e726?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yugwqo5fKrfewW5C9noLhHOo7nXXX83aizfm2~r9I7PORYNKMofkCQy933VPrCa~OUrRQu090jbwbSS~~2ZlBcMR420UGvPtJ4B0CYWI~Y2MlfT943Xu03aSNWXOFTcSSgdtDaopPMzh0ifYTmzWZUz4OajsVzIXIHjxp3X51CkG145XAmzO8O6iLXqczEQCxbkqhhaHCuCGDrluDdjo2SGSP5UgBqE0o7b0WwHC3E0rGUuZ9i4IAPZ2bykhNGbO3kaQeyFxVgO3MTycuOZdIOWly-BLa9cj3OCx729ERYtVaPwfATcbQQiGupgg772yHtvD14kbP3rYt2FWUNW6EA__", name: 'Vegan Burger', price: '₹6.49', orders: 120 },
                { img: "https://s3-alpha-sig.figma.com/img/2219/e5be/2ad9d683186e027903e0156fdf01e726?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yugwqo5fKrfewW5C9noLhHOo7nXXX83aizfm2~r9I7PORYNKMofkCQy933VPrCa~OUrRQu090jbwbSS~~2ZlBcMR420UGvPtJ4B0CYWI~Y2MlfT943Xu03aSNWXOFTcSSgdtDaopPMzh0ifYTmzWZUz4OajsVzIXIHjxp3X51CkG145XAmzO8O6iLXqczEQCxbkqhhaHCuCGDrluDdjo2SGSP5UgBqE0o7b0WwHC3E0rGUuZ9i4IAPZ2bykhNGbO3kaQeyFxVgO3MTycuOZdIOWly-BLa9cj3OCx729ERYtVaPwfATcbQQiGupgg772yHtvD14kbP3rYt2FWUNW6EA__", name: 'Cheeseburger', price: '₹5.99', orders: 250 },
                { img: "https://s3-alpha-sig.figma.com/img/2219/e5be/2ad9d683186e027903e0156fdf01e726?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yugwqo5fKrfewW5C9noLhHOo7nXXX83aizfm2~r9I7PORYNKMofkCQy933VPrCa~OUrRQu090jbwbSS~~2ZlBcMR420UGvPtJ4B0CYWI~Y2MlfT943Xu03aSNWXOFTcSSgdtDaopPMzh0ifYTmzWZUz4OajsVzIXIHjxp3X51CkG145XAmzO8O6iLXqczEQCxbkqhhaHCuCGDrluDdjo2SGSP5UgBqE0o7b0WwHC3E0rGUuZ9i4IAPZ2bykhNGbO3kaQeyFxVgO3MTycuOZdIOWly-BLa9cj3OCx729ERYtVaPwfATcbQQiGupgg772yHtvD14kbP3rYt2FWUNW6EA__", name: 'Vegan Burger', price: '₹6.49', orders: 120 },
                { img: "https://s3-alpha-sig.figma.com/img/2219/e5be/2ad9d683186e027903e0156fdf01e726?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yugwqo5fKrfewW5C9noLhHOo7nXXX83aizfm2~r9I7PORYNKMofkCQy933VPrCa~OUrRQu090jbwbSS~~2ZlBcMR420UGvPtJ4B0CYWI~Y2MlfT943Xu03aSNWXOFTcSSgdtDaopPMzh0ifYTmzWZUz4OajsVzIXIHjxp3X51CkG145XAmzO8O6iLXqczEQCxbkqhhaHCuCGDrluDdjo2SGSP5UgBqE0o7b0WwHC3E0rGUuZ9i4IAPZ2bykhNGbO3kaQeyFxVgO3MTycuOZdIOWly-BLa9cj3OCx729ERYtVaPwfATcbQQiGupgg772yHtvD14kbP3rYt2FWUNW6EA__", name: 'Vegan Burger', price: '₹6.49', orders: 120 }
            ]
        },
        {
            name: 'Sandwich',
            img: 'https://s3-alpha-sig.figma.com/img/9ac5/7848/92cebe7826b91979d7ec7154dc714870?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nfe763GT9J2IpVlWo8~gRwMn9PgyWnClZxx4MBD~I9z4euA2DYJieP2A0CtTYN0mfnd9YZP2JJ964cLHY216rQzCgTdWc~kKZPyvUScIxSGgjErHlwvkI12crwhumd7MIhwuSEDhuno-jZe2uJkhL4GIQ6fNHs1oFbwJmzFQd2lVNbjbO8sDCeHuroYgiNpwplKerV7k4aGWjL4VUwEgHfVaszAqbbfXGwyCaoAmJvn8d-KzFkC9DKtQA0u4iAWactCe6RvLJb8RI5c-HJFzhLNkdVxsRWZtl~vhkYrlw1LfVD3hrmGJ0~Js0RtHlQZG6EVQSPEOSY0kOwBCaGTlzw__', 
            items: [
                { img: "https://s3-alpha-sig.figma.com/img/9ac5/7848/92cebe7826b91979d7ec7154dc714870?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nfe763GT9J2IpVlWo8~gRwMn9PgyWnClZxx4MBD~I9z4euA2DYJieP2A0CtTYN0mfnd9YZP2JJ964cLHY216rQzCgTdWc~kKZPyvUScIxSGgjErHlwvkI12crwhumd7MIhwuSEDhuno-jZe2uJkhL4GIQ6fNHs1oFbwJmzFQd2lVNbjbO8sDCeHuroYgiNpwplKerV7k4aGWjL4VUwEgHfVaszAqbbfXGwyCaoAmJvn8d-KzFkC9DKtQA0u4iAWactCe6RvLJb8RI5c-HJFzhLNkdVxsRWZtl~vhkYrlw1LfVD3hrmGJ0~Js0RtHlQZG6EVQSPEOSY0kOwBCaGTlzw__", name: 'Grilled Cheese', price: '₹4.99', orders: 90 },
                { img: "https://s3-alpha-sig.figma.com/img/9ac5/7848/92cebe7826b91979d7ec7154dc714870?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nfe763GT9J2IpVlWo8~gRwMn9PgyWnClZxx4MBD~I9z4euA2DYJieP2A0CtTYN0mfnd9YZP2JJ964cLHY216rQzCgTdWc~kKZPyvUScIxSGgjErHlwvkI12crwhumd7MIhwuSEDhuno-jZe2uJkhL4GIQ6fNHs1oFbwJmzFQd2lVNbjbO8sDCeHuroYgiNpwplKerV7k4aGWjL4VUwEgHfVaszAqbbfXGwyCaoAmJvn8d-KzFkC9DKtQA0u4iAWactCe6RvLJb8RI5c-HJFzhLNkdVxsRWZtl~vhkYrlw1LfVD3hrmGJ0~Js0RtHlQZG6EVQSPEOSY0kOwBCaGTlzw__", name: 'Chicken Sandwich', price: '₹5.49', orders: 60 },
                { img: "https://s3-alpha-sig.figma.com/img/9ac5/7848/92cebe7826b91979d7ec7154dc714870?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nfe763GT9J2IpVlWo8~gRwMn9PgyWnClZxx4MBD~I9z4euA2DYJieP2A0CtTYN0mfnd9YZP2JJ964cLHY216rQzCgTdWc~kKZPyvUScIxSGgjErHlwvkI12crwhumd7MIhwuSEDhuno-jZe2uJkhL4GIQ6fNHs1oFbwJmzFQd2lVNbjbO8sDCeHuroYgiNpwplKerV7k4aGWjL4VUwEgHfVaszAqbbfXGwyCaoAmJvn8d-KzFkC9DKtQA0u4iAWactCe6RvLJb8RI5c-HJFzhLNkdVxsRWZtl~vhkYrlw1LfVD3hrmGJ0~Js0RtHlQZG6EVQSPEOSY0kOwBCaGTlzw__", name: 'Grilled Cheese', price: '₹4.99', orders: 90 },
                { img: "https://s3-alpha-sig.figma.com/img/9ac5/7848/92cebe7826b91979d7ec7154dc714870?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nfe763GT9J2IpVlWo8~gRwMn9PgyWnClZxx4MBD~I9z4euA2DYJieP2A0CtTYN0mfnd9YZP2JJ964cLHY216rQzCgTdWc~kKZPyvUScIxSGgjErHlwvkI12crwhumd7MIhwuSEDhuno-jZe2uJkhL4GIQ6fNHs1oFbwJmzFQd2lVNbjbO8sDCeHuroYgiNpwplKerV7k4aGWjL4VUwEgHfVaszAqbbfXGwyCaoAmJvn8d-KzFkC9DKtQA0u4iAWactCe6RvLJb8RI5c-HJFzhLNkdVxsRWZtl~vhkYrlw1LfVD3hrmGJ0~Js0RtHlQZG6EVQSPEOSY0kOwBCaGTlzw__", name: 'Chicken Sandwich', price: '₹5.49', orders: 60 },
                { img: "https://s3-alpha-sig.figma.com/img/9ac5/7848/92cebe7826b91979d7ec7154dc714870?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nfe763GT9J2IpVlWo8~gRwMn9PgyWnClZxx4MBD~I9z4euA2DYJieP2A0CtTYN0mfnd9YZP2JJ964cLHY216rQzCgTdWc~kKZPyvUScIxSGgjErHlwvkI12crwhumd7MIhwuSEDhuno-jZe2uJkhL4GIQ6fNHs1oFbwJmzFQd2lVNbjbO8sDCeHuroYgiNpwplKerV7k4aGWjL4VUwEgHfVaszAqbbfXGwyCaoAmJvn8d-KzFkC9DKtQA0u4iAWactCe6RvLJb8RI5c-HJFzhLNkdVxsRWZtl~vhkYrlw1LfVD3hrmGJ0~Js0RtHlQZG6EVQSPEOSY0kOwBCaGTlzw__", name: 'Grilled Cheese', price: '₹4.99', orders: 90 }
            ]
        },
        {
            name: 'Drinks',
            img: 'https://s3-alpha-sig.figma.com/img/cecc/4fd1/3829c29c170bee25c8af06e829cde3de?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ccTM7OIUunVihbT~~mbQeiIkH1c7prlfjnTQGPGyjjj-Fut~MGBSiBODrGZ~-UUUFWYwczEIb1FCcfVmwSL6HheLQnyIUEN5fzfyEGKvyHOuEeOPpPmGLP0c~YyYfXEfUc6IGsDqSYQ46WK6i28BFyoOtHUVQ2faxhLyDvKVDyGdYmH2HDW1-8oSChyf8nDprzWrnQE6OI~rvU5f1OE9F6FdTk8KtCa6DVzeociE5WSzQQJMjmf5D2Ru~RAGoFUJsXKurXIZMPJbrHbmBDe8kYGRoz81zictgrAQ8D5CDem~mM7W8Jz4gE9KAQgw-r541QsMR8QiHjINWzIkmYcobA__', 
            items: [
                { img: "https://s3-alpha-sig.figma.com/img/cecc/4fd1/3829c29c170bee25c8af06e829cde3de?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ccTM7OIUunVihbT~~mbQeiIkH1c7prlfjnTQGPGyjjj-Fut~MGBSiBODrGZ~-UUUFWYwczEIb1FCcfVmwSL6HheLQnyIUEN5fzfyEGKvyHOuEeOPpPmGLP0c~YyYfXEfUc6IGsDqSYQ46WK6i28BFyoOtHUVQ2faxhLyDvKVDyGdYmH2HDW1-8oSChyf8nDprzWrnQE6OI~rvU5f1OE9F6FdTk8KtCa6DVzeociE5WSzQQJMjmf5D2Ru~RAGoFUJsXKurXIZMPJbrHbmBDe8kYGRoz81zictgrAQ8D5CDem~mM7W8Jz4gE9KAQgw-r541QsMR8QiHjINWzIkmYcobA__", name: 'Cola', price: '₹1.99', orders: 300 },
                { img: "https://s3-alpha-sig.figma.com/img/cecc/4fd1/3829c29c170bee25c8af06e829cde3de?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ccTM7OIUunVihbT~~mbQeiIkH1c7prlfjnTQGPGyjjj-Fut~MGBSiBODrGZ~-UUUFWYwczEIb1FCcfVmwSL6HheLQnyIUEN5fzfyEGKvyHOuEeOPpPmGLP0c~YyYfXEfUc6IGsDqSYQ46WK6i28BFyoOtHUVQ2faxhLyDvKVDyGdYmH2HDW1-8oSChyf8nDprzWrnQE6OI~rvU5f1OE9F6FdTk8KtCa6DVzeociE5WSzQQJMjmf5D2Ru~RAGoFUJsXKurXIZMPJbrHbmBDe8kYGRoz81zictgrAQ8D5CDem~mM7W8Jz4gE9KAQgw-r541QsMR8QiHjINWzIkmYcobA__", name: 'Orange Juice', price: '₹2.49', orders: 150 },
                { img: "https://s3-alpha-sig.figma.com/img/cecc/4fd1/3829c29c170bee25c8af06e829cde3de?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ccTM7OIUunVihbT~~mbQeiIkH1c7prlfjnTQGPGyjjj-Fut~MGBSiBODrGZ~-UUUFWYwczEIb1FCcfVmwSL6HheLQnyIUEN5fzfyEGKvyHOuEeOPpPmGLP0c~YyYfXEfUc6IGsDqSYQ46WK6i28BFyoOtHUVQ2faxhLyDvKVDyGdYmH2HDW1-8oSChyf8nDprzWrnQE6OI~rvU5f1OE9F6FdTk8KtCa6DVzeociE5WSzQQJMjmf5D2Ru~RAGoFUJsXKurXIZMPJbrHbmBDe8kYGRoz81zictgrAQ8D5CDem~mM7W8Jz4gE9KAQgw-r541QsMR8QiHjINWzIkmYcobA__", name: 'Cola', price: '₹1.99', orders: 300 },
                { img: "https://s3-alpha-sig.figma.com/img/cecc/4fd1/3829c29c170bee25c8af06e829cde3de?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ccTM7OIUunVihbT~~mbQeiIkH1c7prlfjnTQGPGyjjj-Fut~MGBSiBODrGZ~-UUUFWYwczEIb1FCcfVmwSL6HheLQnyIUEN5fzfyEGKvyHOuEeOPpPmGLP0c~YyYfXEfUc6IGsDqSYQ46WK6i28BFyoOtHUVQ2faxhLyDvKVDyGdYmH2HDW1-8oSChyf8nDprzWrnQE6OI~rvU5f1OE9F6FdTk8KtCa6DVzeociE5WSzQQJMjmf5D2Ru~RAGoFUJsXKurXIZMPJbrHbmBDe8kYGRoz81zictgrAQ8D5CDem~mM7W8Jz4gE9KAQgw-r541QsMR8QiHjINWzIkmYcobA__", name: 'Orange Juice', price: '₹2.49', orders: 150 },
                { img: "https://s3-alpha-sig.figma.com/img/cecc/4fd1/3829c29c170bee25c8af06e829cde3de?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ccTM7OIUunVihbT~~mbQeiIkH1c7prlfjnTQGPGyjjj-Fut~MGBSiBODrGZ~-UUUFWYwczEIb1FCcfVmwSL6HheLQnyIUEN5fzfyEGKvyHOuEeOPpPmGLP0c~YyYfXEfUc6IGsDqSYQ46WK6i28BFyoOtHUVQ2faxhLyDvKVDyGdYmH2HDW1-8oSChyf8nDprzWrnQE6OI~rvU5f1OE9F6FdTk8KtCa6DVzeociE5WSzQQJMjmf5D2Ru~RAGoFUJsXKurXIZMPJbrHbmBDe8kYGRoz81zictgrAQ8D5CDem~mM7W8Jz4gE9KAQgw-r541QsMR8QiHjINWzIkmYcobA__", name: 'Cola', price: '₹1.99', orders: 300 },
            ]
        }
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');
    const currentCategory = categories.find(cat => cat.name === selectedCategory);

    return (
        <div className="app bg-dark text-white">
            <nav className="navbar navbar-dark d-flex justify-content-between align-items-center px-3" style={{ padding: '15px 16px', background: 'rgba(31, 29, 43, 1)' }}>
                <div className="d-flex align-items-center">
                    <img src={logo2} alt="Logo" className="navbar-logo me-2" style={{ height: '50px', width: '120px' }} />
                </div>
                <div className="d-flex align-items-center">
                    <div className="header-icon d-flex justify-content-center align-items-center me-3" style={{ width: '40px', height: '40px' }}>
                        <IoIosSearch style={{ width: '20px', height: '20px' }} />
                    </div>
                    <div className="header-icon d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
                        <PiShoppingCartFill />
                    </div>
                </div>
            </nav>

            <div className="p-4" style={{ background: 'rgba(11 , 15 , 31)' }}>
                <div className="category-section py-3">
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-success px-3">Veg</button>
                        <button className="btn btn-outline-danger px-3">Non-Veg</button>
                    </div>

                    {/* Category Tabs */}
                    <div className="d-flex flex-wrap mt-3 border-0">
                        {categories.map((category, index) => (
                            <div key={index} className="d-flex flex-column align-items-center m-2">
                                <button className="btn btn-secondary category-button" onClick={() => setSelectedCategory(category.name)}>
                                    <img src={category.img} alt={category.name} width={50} height={50} style={{ objectFit: 'cover' }} />
                                </button>
                                <h2 className="mt-2 text-center" style={{ fontSize: '14px' }}>
                                    {category.name}
                                </h2>
                            </div>
                        ))}
                    </div>

                    {/* Display items of the selected category */}
                    <div className="trending-menu mt-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="text-white">Trending Menu</h5>
                            <button className="btn btn-link text-decoration-none text-white">View All</button>
                        </div>
                    </div>
                    <div className="list-group mt-3">
                        {currentCategory.items.map((item, index) => (
                            <div key={index} className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center border-0 mb-3" style={{ padding: "15px 16px" }}>
                                <div className="d-flex align-items-center">
                                    <img src={item.img || 'fallback-image.jpg'} alt={item.name} className="mr-3" style={{ width: '75px', height: '60px', objectFit: 'cover' }} />
                                    <div className="ms-3">
                                        <h6 className="mb-1">{item.name}</h6>
                                        <small>Order Per Day: {item.orders}</small>
                                    </div>
                                </div>
                                <div>
                                    <span className="d-block mb-1 text-success">{item.price}</span>
                                    <button className="btn btn-warning btn-sm">Order Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
