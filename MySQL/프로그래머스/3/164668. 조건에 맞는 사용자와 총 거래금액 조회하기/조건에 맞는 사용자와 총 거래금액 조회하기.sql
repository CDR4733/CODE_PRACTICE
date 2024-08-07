SELECT USER_ID, NICKNAME, TOTAL_SALES
FROM (
SELECT U.USER_ID AS USER_ID, 
       U.NICKNAME AS NICKNAME, 
       SUM(B.PRICE) AS TOTAL_SALES
FROM USED_GOODS_USER U 
     INNER JOIN USED_GOODS_BOARD B 
     ON U.USER_ID = B.WRITER_ID
WHERE STATUS = "DONE"
GROUP BY 1
)T
WHERE TOTAL_SALES >= 700000
ORDER BY 3 ASC