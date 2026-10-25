import unittest

def load_module(filename, func_name):
    with open(filename, 'r') as f:
        code = f.read()
    scope = {}
    if filename == '3rdquestion':
        # Strip only the trailing driver code
        lines = code.splitlines()
        code = '\n'.join([
            l for l in lines 
            if not l.startswith('n = int(input())')
            and not l.startswith('arr = list(')
            and not l.startswith('print(')
        ])
    exec(code, scope)
    return scope[func_name]

house_robber = load_module('1stquestion', 'house_robber')
predict_senate_winner = load_module('2ndquestion', 'predict_senate_winner')
count_above_median = load_module('3rdquestion', 'count_above_median')

class TestAlgorithmSuite(unittest.TestCase):
    # --- Feature F1: House Robber Tests ---
    def test_house_robber_empty(self):
        self.assertEqual(house_robber([]), 0)

    def test_house_robber_single_element(self):
        self.assertEqual(house_robber([5]), 5)

    def test_house_robber_two_elements(self):
        self.assertEqual(house_robber([10, 20]), 20)

    def test_house_robber_example_1(self):
        self.assertEqual(house_robber([1, 2, 3, 1]), 4)

    def test_house_robber_example_2(self):
        self.assertEqual(house_robber([2, 7, 9, 3, 1]), 12)

    def test_house_robber_all_zeros(self):
        self.assertEqual(house_robber([0, 0, 0, 0]), 0)

    # --- Feature F2: Dota2 Senate Tests ---
    def test_senate_simple_radiant(self):
        self.assertEqual(predict_senate_winner("RD"), "Radiant")

    def test_senate_simple_dire(self):
        self.assertEqual(predict_senate_winner("RDD"), "Dire")

    def test_senate_radiant_majority(self):
        self.assertEqual(predict_senate_winner("RRDDD"), "Radiant")

    def test_senate_alternating(self):
        self.assertEqual(predict_senate_winner("RDRD"), "Radiant")

    # --- Feature F3: Median Debugger Tests ---
    def test_median_odd_length(self):
        self.assertEqual(count_above_median([1, 2, 3, 4, 5]), 2)

    def test_median_even_length(self):
        # Sorted: [1, 2, 3, 4, 5, 6], mid_index = 3, median = 4, elements > 4: [5, 6] -> 2
        self.assertEqual(count_above_median([1, 3, 2, 5, 4, 6]), 2)

    def test_median_duplicates(self):
        # Sorted: [2, 2, 2, 2], mid_index = 2, median = 2, elements > 2 -> 0
        self.assertEqual(count_above_median([2, 2, 2, 2]), 0)

if __name__ == '__main__':
    unittest.main()
