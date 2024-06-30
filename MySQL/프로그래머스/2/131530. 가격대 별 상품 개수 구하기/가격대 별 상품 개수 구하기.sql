SELECT PRICE_GROUP,
       COUNT(PRODUCT_ID) AS PRODUCTS
FROM
(
SELECT PRODUCT_ID,
       CASE WHEN PRICE >= 0 AND PRICE < 10000 THEN '0'
            WHEN PRICE >= 10000 AND PRICE < 20000 THEN '10000'
            WHEN PRICE >= 20000 AND PRICE < 30000 THEN '20000'
            WHEN PRICE >= 30000 AND PRICE < 40000 THEN '30000' 
            WHEN PRICE >= 40000 AND PRICE < 50000 THEN '40000'
            WHEN PRICE >= 50000 AND PRICE < 60000 THEN '50000' 
            WHEN PRICE >= 60000 AND PRICE < 70000 THEN '60000' 
            WHEN PRICE >= 70000 AND PRICE < 80000 THEN '70000' 
            WHEN PRICE >= 80000 AND PRICE < 90000 THEN '80000' 
       END AS PRICE_GROUP
FROM PRODUCT
)G
GROUP BY PRICE_GROUP
ORDER BY PRICE_GROUP