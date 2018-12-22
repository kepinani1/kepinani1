INSERT INTO budget (name, income, amount) VALUES ('Monthly Paycheck', true, 1750.00);
INSERT INTO budget (name, income, amount) VALUES ('Savings', true, 250.00);
INSERT INTO budget (name, expense, amount) VALUES ('Loan', true, 1200.00);
INSERT INTO budget (name, expense, amount) VALUES ('Rent', true, 1590.00);
INSERT INTO budget (name, expense, amount) VALUES ('Groceries', true, 125.00);
INSERT INTO budget (name, income, amount) VALUES ('Salary', true, 2250.00);
INSERT INTO budget (name, income, amount) VALUES ('Investment', true, 240.00);
INSERT INTO budget (name, income, amount) VALUES ('Other', true, 100.00);
SELECT SUM(income - expense) AS "Net Income"
FROM budget;
