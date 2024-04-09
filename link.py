with open('link.txt', 'r') as input_file:
    with open('link_jadi.txt', 'a') as output_file:
        for line in input_file:
            a = f'''<img src="{line}" alt="" />'''
            output_file.write(a)