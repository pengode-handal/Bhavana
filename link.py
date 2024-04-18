with open('link_sponsor.txt', 'r') as input_file:
    with open('link_sponsor_jadi.txt', 'a') as output_file:
        for line in input_file:
            a = f'''<img src="{line}" alt=""/>\n'''
            output_file.write(a)