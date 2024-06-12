-- Insert sample data into auth_user
INSERT INTO auth_user (id, first_name, last_name, username, email, password, date_joined) VALUES
('f8a110e4-0a2e-4a2e-9c4b-1d87a98723d1', 'John', 'Doe', 'johndoe', 'johndoe@example.com', 'password123', '2024-06-01T10:00:00Z'),
('d7a110e4-0a2e-4a2e-9c4b-1d87a98723d2', 'Jane', 'Smith', 'janesmith', 'janesmith@example.com', 'password456', '2024-06-01T10:05:00Z'),
('c6a110e4-0a2e-4a2e-9c4b-1d87a98723d3', 'Alice', 'Johnson', 'alicej', 'alicej@example.com', 'password789', '2024-06-01T10:10:00Z');

-- Insert sample data into notification
INSERT INTO notification (id, user_id, title, datetime, is_read) VALUES
('a3b110e4-0a2e-4a2e-9c4b-1d87a98723d4', 'f8a110e4-0a2e-4a2e-9c4b-1d87a98723d1', 'Welcome to the forum!', '2024-06-01T10:15:00Z', false),
('b4b110e4-0a2e-4a2e-9c4b-1d87a98723d5', 'd7a110e4-0a2e-4a2e-9c4b-1d87a98723d2', 'New Message', '2024-06-01T10:20:00Z', true),
('c5b110e4-0a2e-4a2e-9c4b-1d87a98723d6', 'c6a110e4-0a2e-4a2e-9c4b-1d87a98723d3', 'Your post was liked', '2024-06-01T10:25:00Z', false);

-- Insert sample data into topic
INSERT INTO topic (id, title, description, created_at) VALUES
('86918158-6ba9-45cf-af0b-72c836267785', 'Best Hiking Trails', 'Share your favorite hiking trails and experiences.', '2024-06-01T10:30:00Z'),
('87818158-6ba9-45cf-af0b-72c836267786', 'DIY Home Projects', 'Discuss your latest DIY home improvement projects.', '2024-06-01T10:35:00Z'),
('88918158-6ba9-45cf-af0b-72c836267787', 'Healthy Recipes', 'Post and discuss healthy recipes.', '2024-06-01T10:40:00Z');

-- Insert sample data into user_options
INSERT INTO user_options (id, user_id, profile_picture_url) VALUES
('d1a110e4-0a2e-4a2e-9c4b-1d87a98723d8', 'f8a110e4-0a2e-4a2e-9c4b-1d87a98723d1', 'http://example.com/images/johndoe.jpg'),
('d2a110e4-0a2e-4a2e-9c4b-1d87a98723d9', 'd7a110e4-0a2e-4a2e-9c4b-1d87a98723d2', 'http://example.com/images/janesmith.jpg'),
('d3a110e4-0a2e-4a2e-9c4b-1d87a98723d0', 'c6a110e4-0a2e-4a2e-9c4b-1d87a98723d3', 'http://example.com/images/alicej.jpg');

-- Insert sample data into thread
INSERT INTO thread (id, author_id, topic_id, body, created_at, last_reply, is_locked, title) VALUES
('e1a110e4-0a2e-4a2e-9c4b-1d87a98723e1', 'f8a110e4-0a2e-4a2e-9c4b-1d87a98723d1', '86918158-6ba9-45cf-af0b-72c836267785', 'I''ve recently visited Yosemite National Park and wanted to share my top 5 trails for fellow hikers.', '2024-06-01T10:45:00Z', '2024-06-01T10:45:00Z', false, 'Top 5 Trails in Yosemite National Park'),
('e2a110e4-0a2e-4a2e-9c4b-1d87a98723e2', 'd7a110e4-0a2e-4a2e-9c4b-1d87a98723d2', '86918158-6ba9-45cf-af0b-72c836267785', 'As someone who enjoys long-distance hiking, I''ve learned the importance of having the right gear.', '2024-06-01T10:50:00Z', '2024-06-01T10:50:00Z', false, 'Essential Gear for Long-Distance Hiking'),
('e3a110e4-0a2e-4a2e-9c4b-1d87a98723e3', 'c6a110e4-0a2e-4a2e-9c4b-1d87a98723d3', '86918158-6ba9-45cf-af0b-72c836267785', 'Hiking alone can be a rewarding and peaceful experience, but it''s important to prioritize safety.', '2024-06-01T10:55:00Z', '2024-06-01T10:55:00Z', false, 'Hiking Safety Tips for Solo Travelers'),
('e4a110e4-0a2e-4a2e-9c4b-1d87a98723e4', 'f8a110e4-0a2e-4a2e-9c4b-1d87a98723d1', '87818158-6ba9-45cf-af0b-72c836267786', 'I just finished building a custom bookshelf for my living room. It was a challenging project but I''m really happy with how it turned out. I used oak wood and added a walnut stain. Has anyone else built their own furniture?', '2024-06-01T11:15:00Z', '2024-06-01T11:15:00Z', false, 'Custom Bookshelf Project'),
('e5a110e4-0a2e-4a2e-9c4b-1d87a98723e5', 'd7a110e4-0a2e-4a2e-9c4b-1d87a98723d2', '87818158-6ba9-45cf-af0b-72c836267786', 'I recently renovated my kitchen and wanted to share some tips. First, plan everything in advance and make sure you have all the necessary tools and materials. Second, take your time with the measurements and cuts. Third, don''t be afraid to ask for help when needed. Anyone else have kitchen renovation stories?', '2024-06-01T11:20:00Z', '2024-06-01T11:20:00Z', false, 'Kitchen Renovation Tips'),
('e6a110e4-0a2e-4a2e-9c4b-1d87a98723e6', 'c6a110e4-0a2e-4a2e-9c4b-1d87a98723d3', '87818158-6ba9-45cf-af0b-72c836267786', 'I''ve been working on a backyard makeover. So far, I''ve built a new deck and planted a garden. I''m planning to add a pergola and some outdoor lighting next. Any suggestions on how to make the space more inviting?', '2024-06-01T11:25:00Z', '2024-06-01T11:25:00Z', false, 'Backyard Makeover Ideas');

-- Insert sample data into comment
INSERT INTO comment (id, author_id, thread_id, body, created_at) VALUES
('f1a110e4-0a2e-4a2e-9c4b-1d87a98723f1', 'f8a110e4-0a2e-4a2e-9c4b-1d87a98723d1', 'e1a110e4-0a2e-4a2e-9c4b-1d87a98723e1', 'I totally agree, the Mist Trail is fantastic!', '2024-06-01T11:00:00Z'),
('f2a110e4-0a2e-4a2e-9c4b-1d87a98723f2', 'd7a110e4-0a2e-4a2e-9c4b-1d87a98723d2', 'e2a110e4-0a2e-4a2e-9c4b-1d87a98723e2', 'Thanks for the gear recommendations, very helpful!', '2024-06-01T11:05:00Z'),
('f3a110e4-0a2e-4a2e-9c4b-1d87a98723f3', 'c6a110e4-0a2e-4a2e-9c4b-1d87a98723d3', 'e3a110e4-0a2e-4a2e-9c4b-1d87a98723e3', 'Great safety tips, I''ll keep these in mind.', '2024-06-01T11:10:00Z');
