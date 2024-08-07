SELECT D.DEPT_ID AS 'DEPT_ID'
     , D.DEPT_NAME_EN AS 'DEPT_NAME_EN'
     , ROUND(AVG(E.SAL), 0) AS 'AVG_SAL'
FROM HR_EMPLOYEES AS E 
LEFT JOIN HR_DEPARTMENT AS D
ON E.DEPT_ID = D.DEPT_ID
GROUP BY 1
ORDER BY 3 DESC